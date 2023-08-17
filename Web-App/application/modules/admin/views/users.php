<div class="container-fluid">
    <div class="we-page-title">
        <div class="row">
            <div class="col-md-5 align-self-center">
                <h3 class="we-page-heading">User</h3> </div>
            <div class="col-md-7 align-self-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active">User</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="user-data-section">
        <div class="user-list-item">
            <div class="user-table-filter">
               <?php echo $this->load->view('common/error');?>
                <form method="get" action="<?php echo base_url('admin/users');?>">
                     <div class="row">
                        <div class="col-md-10 text-right">
                            <div class="filter-nav-list">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);" class="bind_status <?php echo (isset($filter_data['status']) && !empty($filter_data['status'])) ? ($filter_data['status'] == 3) ? 'active' : '' : '';?>" data-id="3">Pending</a>
                                    </li>
                                    <li>
                                        <a class="bind_status <?php echo (isset($filter_data['status']) && !empty($filter_data['status'])) ? ($filter_data['status'] == 1) ? 'active' : '' : 'active';?>" href="javascript:void(0);" data-id="1">Approved</a>
                                    </li>

                                    <li>
                                        <a class="bind_status <?php echo (isset($filter_data['status']) && !empty($filter_data['status'])) ? ($filter_data['status'] == 2) ? 'active' : '' : 'active';?>" href="javascript:void(0);" data-id="2">Unapproved</a>
                                    </li>

                                    <li>
                                        <a class="bind_status <?php echo (isset($filter_data['status']) && !empty($filter_data['status'])) ? ($filter_data['status'] == 4) ? 'active' : '' : 'active';?>" href="javascript:void(0);" data-id="4">Suspended</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                           <input type="hidden" name="status" value="<?php echo (isset($filter_data['status']) && !empty($filter_data['status'])) ? $filter_data['status'] : "";?>">
                            <div class="form-group">
                                <select class="form-control user_group_filter" name="user_group">
                                    <option value="">Select</option>
                                    <option value="5" <?php echo (isset($filter_data['user_group']) && !empty($filter_data['user_group'])) ? ($filter_data['user_group'] == 5) ? 'selected' : '' : '';?>>Athlete</option>
                                    <option value="4" <?php echo (isset($filter_data['user_group']) && !empty($filter_data['user_group'])) ? ($filter_data['user_group'] == 4) ? 'selected' : '' : '';?>>Scout / Club</option>
                                    <option value="3" <?php echo (isset($filter_data['user_group']) && !empty($filter_data['user_group'])) ? ($filter_data['user_group'] == 3) ? 'selected' : '' : '';?>>Coach / Trainer</option>
                                    <option value="2" <?php echo (isset($filter_data['user_group']) && !empty($filter_data['user_group'])) ? ($filter_data['user_group'] == 2) ? 'selected' : '' : '';?>>Fan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="user-table">
                <table>
                    <tbody>
                        <?php 
                           //$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
                           if(isset($result) && is_array($result)) {
                              if(count($result) > 0) {
                                 foreach ($result as $user_info) { 
                                    $profile_pic = $user_info->profile_pic ? base_url('uploads/profile/'.$user_info->id.'/'.$user_info->profile_pic) : base_url('assets/images/profile.png');
                                    $user_id_encypt = encrypt_decrypt('encrypt', $user_info->id);
                                 ?>
                                    <tr>
                                       <td>
                                          <div class="user-table-info">
                                             <div class="user-table-media">
                                                <img src="<?php echo $profile_pic;?>">
                                             </div>
                                             <div class="user-table-value">
                                                <a href="javascript:void(0);" id="view-user-profile" data-id="<?php echo $user_id_encypt;?>">
                                                    <h2><?php echo $user_info->first_name;?> <?php echo $user_info->last_name;?></h2>
                                                </a>
                                                <div class="user-table-action">
                                                   <?php echo ($user_info->status == 3) ? '
                                                   <a href="javascript:void(0)" class="table-btn approve-profile" data-id="'.$user_id_encypt.'">Accept</a> <a href="javascript:void(0)" class="table-btn reject-profile" data-id="'.$user_id_encypt.'">Reject</a> <a href="javascript:void(0)" class="table-btn delete-profile" data-id="'.$user_id_encypt.'">Delete</a>' : (($user_info->status == 2 || $user_info->status == 4) ? '
                                                   <a href="javascript:void(0)" class="table-btn approve-profile" data-id="'.$user_id_encypt.'">Accept</a> <a href="javascript:void(0)" class="table-btn delete-profile" data-id="'.$user_id_encypt.'">Delete</a>' : '<a href="javascript:void(0)" class="table-btn suspend-profile" data-id="'.$user_id_encypt.'">Suspend</a> <a href="javascript:void(0)" class="table-btn reject-profile" data-id="'.$user_id_encypt.'">Reject</a> <a href="javascript:void(0)" class="table-btn delete-profile" data-id="'.$user_id_encypt.'">Delete</a>');?>
                                                </div>
                                             </div>
                                          </div>
                                       </td>   
                                       <td>
                                          <div class="table-text-info">
                                             <div class="table-info-heading">Email:</div>
                                             <div class="table-info-value"><?php echo $user_info->email;?></div>

                                          </div>
                                       </td>
                                       <td>
                                        <?php 
                                        $user_group='';
                                        if($user_info->user_group==5){
                                            $user_group = 'Athlete';
                                        }else if($user_info->user_group==4){
                                             $user_group = 'Scout / Club';
                                        }else if($user_info->user_group==3){
                                             $user_group = 'Coach / Trainer';
                                        }else if($user_info->user_group==2){
                                             $user_group = 'Fan';
                                        }
                                        ?>
                                          <div class="table-text-info">
                                             <div class="table-info-heading"></div>
                                             <div class="table-info-value"><?php echo $user_group;?></div>

                                          </div>
                                       </td>
                                       <td>
                                          <?php echo $user_info->user_group != 2 ? '<a href="javascript:void(0)" class="action-btn view-uplaoded-documents" data-id="'.$user_id_encypt.'"> <i class="las la-eye"></i> View Document</a>' : '';?>
                                       </td>
                                       <td>
                                          <?php echo $user_info->user_group != 2 ? '<a href="'.base_url('admin/download_doc/'.$user_id_encypt).'" class="action-btn">
                                                <i class="las la-download"></i> Download Documents</a>' : '';?>
                                       </td>
                                    </tr>
                           <?php }
                              }
                              else
                                echo '<tr><td colspan="4">
                                          <div class="table-text-info">
                                             <div class="table-info-value">No records found</div>

                                          </div>
                                       </td></tr>' ;

                           }
                        ?>
                        
                    </tbody>
                </table>
                <div style="margin-top: 20px;">
                <?= !empty($links) ? $links : ''; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal_section">        
</div>