//Type your code here
function postAppInit(){
  if(kony.store.getItem("email")!==null){
  username=kony.store.getItem("username");
  frmHome.flxHome.tabHome.lblName.text=username;
  return frmHome;
  }
else{
  	return frmLogin;
	}
}