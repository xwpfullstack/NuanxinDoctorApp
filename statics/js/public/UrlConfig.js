/*************************
 *实现与后台数据交互
*************************/
global.Basic_URL = 'http://www.xingwenpeng.com/doctor/';
//验证医生用户名密码
global.CheckUserInfo_URL = Basic_URL + 'AppLogin/';
//医生注册
global.DoctorRegist_URL = Basic_URL + 'register/';
//获取医生信息
global.DocInfo = Basic_URL + 'info/';
//编辑后保存医生信息
global.SaveDovInfo = Basic_URL + 'editorInfo/';
//获取患者列表
global.PatientList_URL = Basic_URL + 'patlist/';
//获取医生诊断列表
global.DocDiags_URL = Basic_URL + 'docDiags/';
//添加医生诊断
global.AddDocDiag_URL = Basic_URL + 'addDocDiag/';
//添加医生药物
global.AddDocMed_URL = Basic_URL + 'addDocMed/';
//获取经典病例
global.TypicalList_URL = Basic_URL + 'getTypical/';
//增加经典病例
global.AddTypicalCase_URL = Basic_URL + 'addTypical/';
//删除经典病例
global.DelTypicalCase_URL = Basic_URL + 'delTypical/';
//更新经典病例
global.UpdataTypicalCase_URL = Basic_URL + 'updateTypical/';
//获取所有药品
global.MedicineList_URL = Basic_URL + 'getMed/';
//获取药品模板列表
global.MedModelList_URL = Basic_URL + 'getModel/';
//增加药品模板
global.AddMedModel_URL = Basic_URL + 'addModel/';
//删除药品模板
global.delMedModel_URL = Basic_URL + 'delModel/';
//患者的医生订单列表
global.PatientOrderList_URL = Basic_URL + 'patOrders/';
//患者的病例列表
global.PatientCaseBook_URL = Basic_URL + 'patCaseBook/';
//医生收藏患者
global.Collection_URL = Basic_URL + 'collection/';
//取消收藏
global.EndCollection_URL = Basic_URL + 'cancel/';
//获取医患关系状态
global.GetRel_URL = Basic_URL + 'getrel/';
//获取医生诊断和系统诊断
global.GetDiags_URL = Basic_URL + 'getdiags/';
//删除服药方法
global.DelMedMethod_URL = Basic_URL + 'delMedMethod/';
//修改服药方法
global.ModifyMethod_URL = Basic_URL + 'modifyMethod/';
//得到医生编号
global.GetDocNum_URL = Basic_URL + 'getdocNum/';
//得到科室信息
global.GetDeparts_URL = Basic_URL + 'getdepars/';
//忘记密码
global.ForgetPass_URL = Basic_URL + 'forgetPass/';
//修改密码
global.ModifyPass_URL = Basic_URL + 'modifyPass/';
//发送短信
global.sendMsg_URL = Basic_URL + 'AppSendMsg/';
