/*Upload Media File*/
$(document).on("change", ".uploadfile", function(){
    var files = this.files;
    
                           
    var names = [];
    var file_data = files; 
    // for multiple files
    for(var i = 0;i<file_data.length;i++){
        var fd = new FormData();
        fd.append("file", file_data[i]);
        $.ajax({
            url:base_url+'admin/upload_media',
            type:'post',
            data:fd,
            contentType: false,
            processData: false,
            success:function(response){
                let responseInfo = JSON.parse(response);
                if(responseInfo.status) {
                    let fileType = responseInfo.filename.split('.').pop();
                    if(fileType == "mp4"){
                        var mp4Section = '<div class="col-md-3"><div class="upload-media-item"><div class="upload-image"><video src="'+base_url+'uploads/temp/'+responseInfo.filename+'"></video></div><div class="upload-icon"><i class="lar la-play-circle"></i></div><span class="remove-file" data-filename="'+responseInfo.filename+'"><i class="fa fa-times"></i></span></div></div>'; 
                        $(mp4Section).insertBefore('.upload-section'); 
                    }
                    else{
                        var imgPreview = '<div class="col-md-3"><div class="upload-media-item"><div class="upload-image"><img src="'+base_url+'uploads/temp/'+responseInfo.filename+'"></div><span class="remove-file" data-filename="'+responseInfo.filename+'"><i class="fa fa-times"></i></span></div></div>'; 
                        $(imgPreview).insertBefore('.upload-section'); 
                    }
                    
                }
                else
                    alert(responseInfo.msg);
                
            },
            error:function(response){
                alert('error : ' + JSON.stringify(response));
            }
        });
        
    }
    
    
});

/*Remove Upload File*/
$(document).on("click", ".remove-file", function(){
    let name = $(this).attr('data-filename');
    var obj = $(this);
    $.ajax({
        url: base_url + "admin/delete_temp_image",
        type: 'POST',
        data: {name: name},
        dataType: 'json',        
        success: function(res) {
            if (res.status == 1) {
               obj.closest('.col-md-3').remove(); 
            }
            

        },
        error:function(res){
            
        }
    });
})

/*Save Post Data*/
$(document).on('submit',"#postForm",function(e) {
    e.preventDefault();
    var formdata = { post_id: $(this).find('input[name=post_id]').val(), latitude: $(this).find('input[name=latitude]').val(),
     longitude: $(this).find('input[name=longitude]').val(), title: $(this).find('input[name=title]').val(), contact_email: $(this).find('input[name=contact_email]').val(), location: $(this).find('input[name=location]').val(), description: $(this).find('textarea[name=description]').val(), link_contact_form: $(this).find('input[name=link_contact_form]:checked').val(), postal_code: $(this).find('input[name=postal_code]').val()};
    
    $.ajax({
        url: base_url + "admin/save_upload_video/coaching_academy",
        data: formdata,
        type: 'POST',
        dataType: 'json',
        beforeSend: function() {
           $(".sb-modal-btn").html('Upload <i class="fa fa-spinner fa-spin"></i>').attr('disabled', 'disabled');
           $("#postForm .alert-error-message").html('');
        },
        success: function(res) {
            if (res.status == 1) {
                $('#postForm .alert-error-message').html('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
                $('#postForm').find('input[name=post_id]').val("");
                setTimeout(function(){ location.reload(true)}, 1000);
            }
            else 
                $('#postForm .alert-error-message').html('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
            $(".sb-modal-btn").html('Upload ').removeAttr('disabled');

        },
        error:function(res){
            
        }
    });
});

/*Search Post*/
$(document).on('click', '.search-posts', function(){
    $(this).closest('form').submit();
});

$(document).on('click', '.view-all-comments', function(){
    let id = $(this).attr('data-id');

    $.ajax({
        type: 'get',
        url: base_url+'admin/get_all_comments/'+id,
        success: function (data) {
            
            $(".modal_section").html(data);
            $("#allComments-modal").modal("show");
        }
    });
});

/*Post Comments*/
$(document).on('click', '.post_comments_form', function(){
    
    var formdata = { post_id: $('.view-comment-group').find('input[name=post_id]').val(), message: $('.view-comment-group').find('input[name=message]').val()};
    
    $.ajax({
        url: base_url + "admin/post_comments",
        data: formdata,
        type: 'POST',
        dataType: 'json',
        beforeSend: function() {
           $(".post_comments_form").html('Save <i class="fa fa-spinner fa-spin"></i>').attr('disabled', 'disabled');
           $(".view-comment-footer .alert-error-message").html('');
        },
        success: function(res) {
            if (res.status == 1) {
                $('.view-comment-footer .alert-error-message').html('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
                //setTimeout(function(){ location.reload(true)}, 1000);
                var commentHtml = '<div class="view-comment-item"><div class="view-comment-item-media"><img src="'+res.data.profile_pic+'" alt="'+res.data.comments_by+'"></div><div class="view-comment-item-value"><h2>'+res.data.comments_by+'</h2><p>'+res.data.comments+'</p><div class="view-comment-time">Just Now</div></div></div>';
                $('#allComments-modal .view-comment-list').append(commentHtml);
                $('.view-comment-group').find('input[name=message]').val('');
                setTimeout(function(){ $('.view-comment-footer .alert-error-message').html('');}, 1000);

            }
            else 
                $('.view-comment-footer .alert-error-message').html('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
            $(".post_comments_form").html('Save ').removeAttr('disabled');

        },
        error:function(res){
            
        }
    });
});

/*Delete Post Data*/
$(document).on('click', '.delete-post-item', function(){

    if(!confirm("Are you sure to delete this records"))
        return false;
    let post_id = $(this).attr('data-id');
    $.ajax({
        url: base_url + "admin/delete_post_item",
        type: 'POST',
        data: {post_id: post_id},
        dataType: 'json',        
        success: function(res) {
            if (res.status == 1) {
               $('#postForm .alert-error-message').html('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
                setTimeout(function(){ location.reload(true)}, 1000); 
            }
            else{
                $('#postForm .alert-error-message').html('<div class="alert alert-error alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
                
            }
            

        },
        error:function(res){
            
        }
    });
});

/*Get Post Details*/
$(document).on('click', '.edit-post-item', function(){

    if(!confirm("Are you sure to edit this records"))
        return false;
    let post_id = $(this).attr('data-id');
    $.ajax({
        url: base_url + "admin/get_post_item",
        type: 'POST',
        data: {post_id: post_id},
        dataType: 'json',        
        success: function(res) {
            if (res.status == 1) {
               let post_details = res.data;
                $('#postForm').find('input[name=title]').val(post_details.title);
                $('#postForm').find('input[name=location]').val(post_details.location);
                if(post_details.link_contact_form == 1)
                    $('#postForm').find('input[value=1]').prop("checked", true);
                else
                    $('#postForm').find('input[value=0]').prop("checked", true);
                $('#postForm').find('input[name=post_id]').val(post_details.id);
                $('#postForm').find('input[name=latitude]').val(post_details.latitude);
                $('#postForm').find('input[name=longitude]').val(post_details.longitude);
                $('#postForm').find('textarea[name=description]').val(post_details.description);
                $('#postForm').find('input[name=contact_email]').val(post_details.contact_email);
                $('#postForm').find('input[name=postal_code]').val(post_details.postal_code);
                if(Array.isArray(post_details.images)) {
                   let uploadedImage = "";
                   post_details.images.forEach(function(item, index){
                        let fileType = item.image_url.split('.').pop();
                        if(fileType == "mp4")
                            uploadedImage+= '<div class="col-md-3"><div class="upload-media-item"><div class="upload-image"><video src="'+item.image_url+'"></video></div><div class="upload-icon"><i class="lar la-play-circle"></i></div><span class="remove-exists-file" data-filename="'+item.image_id+'"><i class="fa fa-times"></i></span></div></div>'; 
                         
                        else
                            uploadedImage+= '<div class="col-md-3"><div class="upload-media-item"><div class="upload-image"><img src="'+item.image_url+'"></div><span class="remove-file" data-filename="'+item.image_id+'"><i class="fa fa-times"></i></span></div></div>'; 
                        
                   });
                   $(uploadedImage).insertBefore('.upload-section');
                       
                }
            }
            else{
                $('#postForm .alert-error-message').html('<div class="alert alert-error alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + res.msg + '</div>');
                
            }
            

        },
        error:function(res){
            
        }
    });
});

/*Remove Existing Upload File*/
$(document).on("click", ".remove-exists-file", function(){
    let name = $(this).attr('data-filename');
    var obj = $(this);
    $.ajax({
        url: base_url + "admin/delete_exit_post_image",
        type: 'POST',
        data: {image_id: name},
        dataType: 'json',        
        success: function(res) {
            if (res.status == 1) {
               obj.closest('.col-md-3').remove(); 
            }
            

        },
        error:function(res){
            
        }
    });
})