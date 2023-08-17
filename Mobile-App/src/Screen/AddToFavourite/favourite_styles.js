import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
    {
        bottom_bar: {
            flex: .12,
            flexDirection: 'row',
            marginHorizontal: "5%",
            marginTop: 10
        },
        bottom_image: {
            marginHorizontal: "8%",
            alignItems: 'center',
           
        },
        homeImage: {
            height: 20,
            width: 20
        },
        camera_image: {
            height: 20,
            width: 25
        },
        Top_camera: {
            marginLeft: "5%",
            marginTop: "5%",
            flex: .3
        },
        logo_timeline: {
            height: 20,
            width: 20,
          
        },
        Notification_icon: {
            justifyContent:'center',
            marginLeft:"10%",
        },
        mypostHedear:{
          color:'#fff',
          fontSize:18,
          
        },
        timer_icon: {
            marginLeft: "25%",
            marginTop:"25%" 
        },
        notifiaction: {
            height: 22,
            width: 18
        },
        chat_icon: {
            height: 21,
            width: 20
        },
        chat: {
            marginTop: 10
        },
        CardView: {
            width: "93%",
            marginTop: "3%",
            backgroundColor: '#201F27',
            alignSelf: 'center',
            borderRadius: 14,
            borderColor: '#fff',
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 5,
            shadowRadius: 10,
        },
        user_name: {
            color: '#D3D3D5',
            fontSize: 14,
            fontFamily:'Raleway-Bold'
        },
        userType: {
            color: '#D3D3D5',
            fontSize: 12,
            fontFamily:'Raleway-Regular'
        },
        userType2: {
            color: '#D3D3D5',
            fontSize: 12,
            marginTop:'4%',marginLeft:'6%',
            fontFamily:'Raleway-Regular'
        },
        more_icon: {
            marginTop: 20,
            marginLeft:"30%"
        },
        moreImg: {
            width: 30,
            height: 6,
        },
        shareImg: {
            width: 20,
            height: 20,
        },
        share_icon: {
            marginTop: 10,
            marginLeft: "0%"
        },
        fav_icon: {
            marginTop: 8,
        },
        febImg: {
            width: 15,
            height: 20,
        },
        febImg2: {
            width: 20,
            height: 20,
        },
        like_bg: {
            // height:25,
            // borderRadius:30,
            // marginTop:10,
            // flexDirection: 'row',
            // alignItems: 'center',
            // marginRight:5,
            // backgroundColor:'#343339',padding:8

            height: 25,
            borderRadius: 30,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 5,
            backgroundColor: '#343339', width: 60, justifyContent: 'center'
        },
        bg_likes: {
            marginTop:25,marginLeft:5
        },
        comments_bg: {
            height: 25,
            borderRadius: 30,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 5,
            backgroundColor: '#343339', width:90, justifyContent: 'center',marginLeft:'20%',
        },
        comments_bg2: {
            height: 25,
            borderRadius: 30,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 5,
            backgroundColor: '#343339', width:90, justifyContent: 'center',marginLeft:'20%',
        },
       
        like: {
            width:15,
            height:15, 
        },
        textStyle: {
            color: '#D3D3D5',
            marginLeft: 8,
            fontSize: 10,
            fontFamily: 'Raleway-Regular', alignSelf: 'center'
        },
        counts_likes: {
            color: '#D3D3D5',
            fontSize: 12,
            fontFamily:'Raleway-Regular'
        },
        text_likes: {
            color: '#D3D3D5',
            fontSize: 12,
            fontFamily:'Raleway-Regular',marginLeft:5
        },
        write_post: {
            color: '#D3D3D5',
            flex: .8
        },
        read_more: {
            color: '#D3D3D5',
            fontSize: 12,
            fontFamily: 'Raleway-Regular'
        },
    
        view_all: {
            color: '#D3D3D5',
            fontSize: 12,
            marginLeft:'5%',
            fontFamily:'Raleway-Regular'
        },
        uploadedTime: {
            color: '#98989B',
            fontSize: 12,
            fontFamily:'Raleway-Regular'
        },
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        button: {
            marginVertical: 24,
            marginHorizontal: 24,
        },
        image: {
            marginVertical: 24,
            alignItems: 'center',
        },
        response: {
            marginVertical: 16,
            marginHorizontal: 8,
        },
        SignupModal: {
            backgroundColor: '#15141A',
            borderRadius: 14,
            borderColor: '#15141A',
            shadowColor: '#15141A',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 5,
            shadowRadius: 10,
            marginBottom: 10,
            alignSelf: 'center',
            width: 250,
            height: 200
        },
        JonMarked_Completed_Modal: {
            width: "100%",
            height: 200,
            backgroundColor: '#000',
            alignSelf: 'center',
            borderRadius: 10,
            borderColor: '#000',
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 5,
            shadowRadius: 10,
            position: 'absolute',
            bottom: "0%",
         },
         DeletePost:{
             color:'#fff',
             fontSize:20,
             fontWeight:'bold',
             alignSelf:'center',
             justifyContent:'center',
             marginTop:"10%",marginLeft:"5%"

         },
         DeletePost_1:{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            alignSelf:'center',
            justifyContent:'center',
            fontFamily:'Raleway-Regular'
       },
         NoBtn:{
            width:90,
            height:40,
            borderColor:'#fff',
            alignItems:'center',
            marginLeft:"10%",
            marginTop:"5%",
            borderRadius:20,
            borderWidth:1
         },
         DeletePost_view:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:"5%"
         },
         DeletePost_2:{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            alignSelf:'center',
            justifyContent:'center',
            marginTop:"3%"

        },
        video_icon:{
            width:30,
            height:30,
            marginRight:"5%"
        },
        BtnView:{
            flexDirection:'row',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            marginTop:"8%"
            
        }
    }
)
export default styles;