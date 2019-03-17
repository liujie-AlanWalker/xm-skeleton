(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03a38eea"],{3654:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("Card",[n("Row",{staticClass:"operation"},[n("Button",{directives:[{name:"has",rawName:"v-has",value:"add",expression:"'add'"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.addMenu}},[t._v("添加子节点")]),n("Button",{directives:[{name:"has",rawName:"v-has",value:"add",expression:"'add'"}],attrs:{icon:"md-add"},on:{click:t.addRootMenu}},[t._v("添加一级菜单")]),n("Button",{directives:[{name:"has",rawName:"v-has",value:"delete",expression:"'delete'"}],attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),n("Dropdown",{on:{"on-click":t.handleDropdown}},[n("Button",[t._v("\n                    更多操作\n                    "),n("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"refresh"}},[t._v("刷新")]),n("DropdownItem",{attrs:{name:"expandOne"}},[t._v("仅展开一级")]),n("DropdownItem",{attrs:{name:"expandTwo"}},[t._v("仅展开两级")]),n("DropdownItem",{attrs:{name:"expandAll"}},[t._v("展开所有")])],1)],1)],1),n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"start"}},[n("Col",{attrs:{span:"6"}},[n("Alert",{attrs:{"show-icon":""}},[t._v("\n                    当前选择编辑：\n                    "),n("span",{staticClass:"select-count"},[t._v(t._s(t.editTitle))]),t.menuForm.id?n("a",{staticClass:"select-clear",on:{click:t.canelEdit}},[t._v("取消选择")]):t._e()]),n("Tree",{attrs:{data:t.data,"show-checkbox":""},on:{"on-check-change":t.changeSelect,"on-select-change":t.selectTree}}),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),n("Col",{attrs:{span:"9"}},[n("Form",{ref:"menuForm",attrs:{model:t.menuForm,"label-width":85,rules:t.menuFormValidate}},[n("FormItem",{attrs:{label:"类型",prop:"type"}},[n("RadioGroup",{model:{value:t.menuForm.type,callback:function(e){t.$set(t.menuForm,"type",e)},expression:"menuForm.type"}},[n("Radio",{attrs:{label:0,disabled:t.isButton}},[n("Icon",{attrs:{type:"ios-list-outline"}}),n("span",[t._v("页面菜单")])],1),n("Radio",{attrs:{label:1,disabled:t.isMenu}},[n("Icon",{attrs:{type:"log-in"}}),n("span",[t._v("操作按钮")])],1)],1)],1),0===t.menuForm.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Input",{model:{value:t.menuForm.title,callback:function(e){t.$set(t.menuForm,"title",e)},expression:"menuForm.title"}})],1):t._e(),1===t.menuForm.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"操作按钮名称不得重复"}},[n("Input",{model:{value:t.menuForm.title,callback:function(e){t.$set(t.menuForm,"title",e)},expression:"menuForm.title"}})],1)],1):t._e(),0===t.menuForm.type?n("FormItem",{attrs:{label:"路径",prop:"path"}},[n("Input",{model:{value:t.menuForm.path,callback:function(e){t.$set(t.menuForm,"path",e)},expression:"menuForm.path"}})],1):t._e(),1===t.menuForm.type?n("FormItem",{attrs:{label:"请求路径",prop:"path"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"填写后台请求URL，后台将作权限拦截，若无可填写'无'或其他"}},[n("Input",{model:{value:t.menuForm.path,callback:function(e){t.$set(t.menuForm,"path",e)},expression:"menuForm.path"}})],1)],1):t._e(),1===t.menuForm.type?n("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[n("Select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.menuForm.buttonType,callback:function(e){t.$set(t.menuForm,"buttonType",e)},expression:"menuForm.buttonType"}},t._l(t.optionData,function(e,r){return n("Option",{key:r,attrs:{value:e.value}},[t._v(t._s(e.title)+"\n                            ")])}))],1):t._e(),0===t.menuForm.type?n("div",[n("FormItem",{attrs:{label:"英文名",prop:"name"}},[n("Input",{model:{value:t.menuForm.name,callback:function(e){t.$set(t.menuForm,"name",e)},expression:"menuForm.name"}})],1),n("FormItem",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"图标",prop:"icon"}},[n("Input",{model:{value:t.menuForm.icon,callback:function(e){t.$set(t.menuForm,"icon",e)},expression:"menuForm.icon"}}),n("span",[t._v("\n                                图标请参考\n                                "),n("a",{attrs:{target:"_blank",href:"https://www.iviewui.com/components/icon"}},[n("Icon",{attrs:{type:"ionic"}}),t._v("\n                                    ionicons\n                                ")],1)])],1),n("FormItem",{attrs:{label:"前端组件",prop:"component"}},[n("Input",{model:{value:t.menuForm.component,callback:function(e){t.$set(t.menuForm,"component",e)},expression:"menuForm.component"}})],1),n("FormItem",{attrs:{label:"跳转网页链接",prop:"url"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"前端组件需为 sys/monitor/monitor 时生效"}},[n("Input",{attrs:{placeholder:"http://"},model:{value:t.menuForm.url,callback:function(e){t.$set(t.menuForm,"url",e)},expression:"menuForm.url"}})],1)],1)],1):t._e(),n("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[n("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.menuForm.sortOrder,callback:function(e){t.$set(t.menuForm,"sortOrder",e)},expression:"menuForm.sortOrder"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("值越小越靠前，支持小数")])],1),n("FormItem",{attrs:{label:"是否启用",prop:"status"}},[n("i-switch",{attrs:{size:"large"},on:{"on-change":t.changeEditSwitch},model:{value:t.editStatus,callback:function(e){t.editStatus=e},expression:"editStatus"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1),n("Form-item",[n("Button",{directives:[{name:"has",rawName:"v-has",value:"edit",expression:"'edit'"}],attrs:{loading:t.submitLoading,type:"primary",icon:"ios-create-outline"},on:{click:t.submitEdit}},[t._v("修改并保存\n                        ")]),n("Button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1)],1),n("Modal",{attrs:{draggable:"",title:t.modalTitle,"mask-closable":!1,width:500,styles:{top:"30px"}},model:{value:t.menuModalVisible,callback:function(e){t.menuModalVisible=e},expression:"menuModalVisible"}},[n("Form",{ref:"menuFormAdd",attrs:{model:t.menuFormAdd,"label-width":85,rules:t.menuFormValidate}},[t.showParent?n("div",[n("FormItem",{attrs:{label:"上级节点："}},[t._v("\n                    "+t._s(t.parentTitle)+"\n                ")])],1):t._e(),n("FormItem",{attrs:{label:"类型",prop:"type"}},[n("RadioGroup",{model:{value:t.menuFormAdd.type,callback:function(e){t.$set(t.menuFormAdd,"type",e)},expression:"menuFormAdd.type"}},[n("Radio",{attrs:{label:0,disabled:t.isButtonAdd}},[n("Icon",{attrs:{type:"ios-list-outline"}}),n("span",[t._v("页面菜单")])],1),n("Radio",{attrs:{label:1,disabled:t.isMenuAdd}},[n("Icon",{attrs:{type:"log-in"}}),n("span",[t._v("操作按钮")])],1)],1)],1),0===t.menuFormAdd.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Input",{model:{value:t.menuFormAdd.title,callback:function(e){t.$set(t.menuFormAdd,"title",e)},expression:"menuFormAdd.title"}})],1):t._e(),1===t.menuFormAdd.type?n("FormItem",{attrs:{label:"名称",prop:"title"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"操作按钮名称不得重复"}},[n("Input",{model:{value:t.menuFormAdd.title,callback:function(e){t.$set(t.menuFormAdd,"title",e)},expression:"menuFormAdd.title"}})],1)],1):t._e(),0===t.menuFormAdd.type?n("FormItem",{attrs:{label:"路径",prop:"path"}},[n("Input",{model:{value:t.menuFormAdd.path,callback:function(e){t.$set(t.menuFormAdd,"path",e)},expression:"menuFormAdd.path"}})],1):t._e(),1===t.menuFormAdd.type?n("FormItem",{attrs:{label:"请求路径",prop:"path"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"填写后台请求URL，后台将作权限拦截，若无可填写'无'或其他"}},[n("Input",{model:{value:t.menuFormAdd.path,callback:function(e){t.$set(t.menuFormAdd,"path",e)},expression:"menuFormAdd.path"}})],1)],1):t._e(),1===t.menuFormAdd.type?n("FormItem",{attrs:{label:"按钮权限类型",prop:"buttonType"}},[n("Select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.menuFormAdd.buttonType,callback:function(e){t.$set(t.menuFormAdd,"buttonType",e)},expression:"menuFormAdd.buttonType"}},t._l(t.optionData,function(e,r){return n("Option",{key:r,attrs:{value:e.value}},[t._v(t._s(e.title))])}))],1):t._e(),0===t.menuFormAdd.type?n("div",[n("FormItem",{attrs:{label:"英文名",prop:"name"}},[n("Input",{model:{value:t.menuFormAdd.name,callback:function(e){t.$set(t.menuFormAdd,"name",e)},expression:"menuFormAdd.name"}})],1),n("FormItem",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"图标",prop:"icon"}},[n("Input",{model:{value:t.menuFormAdd.icon,callback:function(e){t.$set(t.menuFormAdd,"icon",e)},expression:"menuFormAdd.icon"}}),n("span",[t._v("\n                        图标请参考\n                        "),n("a",{attrs:{target:"_blank",href:"https://www.iviewui.com/components/icon"}},[n("Icon",{attrs:{type:"ionic"}}),t._v("\n                            ionicons\n                        ")],1)])],1),n("FormItem",{attrs:{label:"前端组件",prop:"component"}},[n("Input",{model:{value:t.menuFormAdd.component,callback:function(e){t.$set(t.menuFormAdd,"component",e)},expression:"menuFormAdd.component"}})],1),n("FormItem",{attrs:{label:"跳转网页链接",prop:"url"}},[n("Poptip",{attrs:{trigger:"focus",placement:"right",width:"230","word-wrap":"",title:"提示",content:"前端组件需为 sys/monitor/monitor 时生效"}},[n("Input",{attrs:{placeholder:"http://"},model:{value:t.menuFormAdd.url,callback:function(e){t.$set(t.menuFormAdd,"url",e)},expression:"menuFormAdd.url"}})],1)],1)],1):t._e(),n("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[n("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.menuFormAdd.sortOrder,callback:function(e){t.$set(t.menuFormAdd,"sortOrder",e)},expression:"menuFormAdd.sortOrder"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("值越小越靠前，支持小数")])],1),n("FormItem",{attrs:{label:"是否启用",prop:"status"}},[n("i-switch",{attrs:{size:"large"},on:{"on-change":t.changeAddSwitch},model:{value:t.addStatus,callback:function(e){t.addStatus=e},expression:"addStatus"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:t.cancelAdd}},[t._v("取消")]),n("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.submitAdd}},[t._v("提交")])],1)],1)],1)},o=[],i=n("f499"),u=n.n(i),a=(n("c5f6"),n("ac6a"),n("365c")),s={name:"menu-manage",data:function(){return{loading:!0,expandLevel:1,menuModalVisible:!1,selectList:[],selectCount:0,showParent:!1,parentTitle:"",isButtonAdd:!1,isMenuAdd:!1,isMenu:!1,isButton:!1,editStatus:!0,addStatus:!0,editTitle:"",modalTitle:"",permTypes:[],menuForm:{id:"",parentId:"",buttonType:"",type:0,sortOrder:null,level:null,status:0,url:""},menuFormAdd:{buttonType:""},menuFormValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],name:[{required:!0,message:"英文名不能为空",trigger:"blur"}],icon:[{required:!0,message:"图标不能为空",trigger:"blur"}],path:[{required:!0,message:"路径不能为空",trigger:"blur"}],component:[{required:!0,message:"前端组件不能为空",trigger:"blur"}]},submitLoading:!1,data:[],optionData:[{title:"查看操作",value:"view"},{title:"添加操作",value:"add"},{title:"编辑操作",value:"edit"},{title:"删除操作",value:"delete"},{title:"清空操作",value:"clear"},{title:"启用操作",value:"enable"},{title:"禁用操作",value:"disable"},{title:"搜索操作",value:"search"},{title:"上传文件",value:"upload"},{title:"导出操作",value:"output"},{title:"导入操作",value:"input"},{title:"分配权限",value:"editPerm"},{title:"设为默认",value:"setDefault"},{title:"其他操作",value:"other"}]}},methods:{init:function(){this.getAllList()},handleDropdown:function(t){"expandOne"===t?(this.expandLevel=1,this.getAllList()):"expandTwo"===t?(this.expandLevel=2,this.getAllList()):"expandAll"===t?(this.expandLevel=3,this.getAllList()):"refresh"===t&&this.getAllList()},getAllList:function(){var t=this;this.loading=!0,this.getRequest("/permission/getAllList").then(function(e){if(t.loading=!1,!0===e.success){var n=t.expandLevel;e.result.forEach(function(t){1===n?(1===t.level&&(t.expand=!1),t.children&&t.children.length>0&&t.children.forEach(function(t){2===t.level&&(t.expand=!1)})):t.children&&t.children.length>0&&t.children.forEach(function(t){2===n&&2===t.level&&(t.expand=!1)})}),t.data=e.result}})},selectTree:function(t){if(t.length>0){for(var e in 1===Number(t[0].level)||2===Number(t[0].level)?(this.isButton=!1,this.isMenu=!0):(this.isButton=!0,this.isMenu=!1),0===Number(t[0].status)?this.editStatus=!0:this.editStatus=!1,t[0])null===t[0][e]&&(t[0][e]="");var n=u()(t[0]),r=JSON.parse(n);this.menuForm=r,this.editTitle=r.title}},canelEdit:function(){this.isMenu=!1,this.isButton=!1,this.$refs.menuForm.resetFields(),delete this.menuForm.id,this.editTitle=""},cancelAdd:function(){this.menuModalVisible=!1},handleReset:function(){this.$refs.menuForm.resetFields(),this.editStatus=!0,this.menuForm.status=0},changeEditSwitch:function(t){this.menuForm.status=t?0:-1},submitEdit:function(){var t=this;this.$refs.menuForm.validate(function(e){if(e){if(!t.menuForm.id)return void t.$Message.warning("请先点击选择要修改的菜单节点");t.submitLoading=!0,null===t.menuForm.sortOrder&&(t.menuForm.sortOrder=""),null===t.menuForm.buttonType&&(t.menuForm.buttonType=""),1==t.menuForm.type&&(t.menuForm.name="",t.menuForm.icon="",t.menuForm.component=""),Object(a["p"])(t.menuForm).then(function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("编辑成功"),t.init(),t.menuModalVisible=!1)})}})},changeAddSwitch:function(t){this.menuFormAdd.status=t?0:-1},submitAdd:function(){var t=this;this.$refs.menuFormAdd.validate(function(e){e&&(t.submitLoading=!0,null===t.menuFormAdd.sortOrder&&(t.menuFormAdd.sortOrder=""),null===t.menuFormAdd.buttonType&&(t.menuFormAdd.buttonType=""),1==t.menuFormAdd.type&&(t.menuFormAdd.name="",t.menuFormAdd.icon="",t.menuFormAdd.component=""),Object(a["b"])(t.menuFormAdd).then(function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("添加成功"),t.init(),t.menuModalVisible=!1)}))})},addMenu:function(){if(""!=this.menuForm.id&&null!=this.menuForm.id){this.parentTitle=this.menuForm.title,this.modalTitle="添加菜单权限(可拖动)",this.showParent=!0;var t=0;if(1===this.menuForm.level)t=0,this.isMenuAdd=!0,this.isButtonAdd=!1;else if(2===this.menuForm.level)t=1,this.isMenuAdd=!1,this.isButtonAdd=!0;else{if(3===this.menuForm.level)return void this.$Modal.error({title:"抱歉，不能添加啦",content:"仅支持2级菜单目录"});t=0,this.isMenuAdd=!1,this.isButtonAdd=!1}this.menuFormAdd={type:t,parentId:this.menuForm.id,level:Number(this.menuForm.level)+1,sortOrder:1,buttonType:"",status:0},this.menuModalVisible=!0}else this.$Message.warning("请先点击选择一个菜单权限节点")},addRootMenu:function(){this.modalTitle="添加一级菜单(可拖动)",this.isMenuAdd=!0,this.isButtonAdd=!1,this.showParent=!1,this.menuFormAdd={type:0,level:1,sortOrder:1,status:0},this.menuModalVisible=!0},changeSelect:function(t){this.selectCount=t.length,this.selectList=t},delAll:function(){var t=this;this.selectCount<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var e="";t.selectList.forEach(function(t){e+=t.id+","}),e=e.substring(0,e.length-1),Object(a["j"])(e).then(function(e){!0===e.success&&(t.$Message.success("删除成功"),t.selectList=[],t.selectCount=0,t.canelEdit(),t.init())})}})}},mounted:function(){this.init()}},l=s,c=(n("8a15"),n("2877")),d=Object(c["a"])(l,r,o,!1,null,null,null);e["default"]=d.exports},"365c":function(t,e,n){"use strict";n.d(e,"E",function(){return o}),n.d(e,"x",function(){return i}),n.d(e,"H",function(){return u}),n.d(e,"M",function(){return a}),n.d(e,"N",function(){return s}),n.d(e,"f",function(){return l}),n.d(e,"L",function(){return c}),n.d(e,"D",function(){return d}),n.d(e,"e",function(){return m}),n.d(e,"t",function(){return p}),n.d(e,"u",function(){return b}),n.d(e,"n",function(){return f}),n.d(e,"m",function(){return h}),n.d(e,"F",function(){return F}),n.d(e,"G",function(){return v}),n.d(e,"a",function(){return g}),n.d(e,"o",function(){return A}),n.d(e,"h",function(){return y}),n.d(e,"w",function(){return w}),n.d(e,"B",function(){return I}),n.d(e,"d",function(){return O}),n.d(e,"r",function(){return _}),n.d(e,"K",function(){return x}),n.d(e,"s",function(){return j}),n.d(e,"l",function(){return k}),n.d(e,"v",function(){return M}),n.d(e,"b",function(){return $}),n.d(e,"p",function(){return B}),n.d(e,"j",function(){return T}),n.d(e,"z",function(){return L}),n.d(e,"C",function(){return S}),n.d(e,"i",function(){return P}),n.d(e,"g",function(){return R}),n.d(e,"y",function(){return C}),n.d(e,"A",function(){return D}),n.d(e,"c",function(){return q}),n.d(e,"q",function(){return E}),n.d(e,"I",function(){return N}),n.d(e,"J",function(){return V}),n.d(e,"k",function(){return z});var r=n("7f80"),o=function(t){return Object(r["b"])("/common/captcha/init")},i=function(t,e){return Object(r["b"])("/common/captcha/draw/".concat(t))},u=function(t){return Object(r["c"])("/login",t)},a=function(t){return Object(r["b"])("/user/info",t)},s=function(t){return Object(r["c"])("/user/edit",t)},l=function(t){return Object(r["c"])("/user/modifyPass",t)},c=function(t){return Object(r["c"])("/user/unlock",t)},d=function(t){return Object(r["b"])("/user/getByCondition",t)},m=function(t){return Object(r["c"])("/user/admin/add",t)},p=function(t){return Object(r["c"])("/user/admin/edit",t)},b=function(t,e){return Object(r["c"])("/user/admin/enable/".concat(t),e)},f=function(t,e){return Object(r["c"])("/user/admin/disable/".concat(t),e)},h=function(t,e){return Object(r["a"])("/user/delByIds/".concat(t),e)},F=function(t){return Object(r["b"])("/department/getByParentId/0",t)},v=function(t,e){return Object(r["b"])("/department/getByParentId/".concat(t),e)},g=function(t){return Object(r["c"])("/department/add",t)},A=function(t){return Object(r["c"])("/department/edit",t)},y=function(t,e){return Object(r["a"])("/department/delByIds/".concat(t),e)},w=function(t){return Object(r["b"])("/role/getAllList",t)},I=function(t){return Object(r["b"])("/role/getAllByPage",t)},O=function(t){return Object(r["c"])("/role/save",t)},_=function(t){return Object(r["c"])("/role/edit",t)},x=function(t){return Object(r["c"])("/role/setDefault",t)},j=function(t,e){return Object(r["c"])("/role/editRolePerm/".concat(t),e)},k=function(t,e){return Object(r["a"])("/role/delAllByIds/".concat(t),e)},M=function(t){return Object(r["b"])("/permission/getAllList",t)},$=function(t){return Object(r["c"])("/permission/add",t)},B=function(t){return Object(r["c"])("/permission/edit",t)},T=function(t,e){return Object(r["a"])("/permission/delByIds/".concat(t),e)},L=function(t){return Object(r["b"])("/log/getAllByPage",t)},S=function(t){return Object(r["b"])("/log/search",t)},P=function(t,e){return Object(r["a"])("/log/delByIds/".concat(t),e)},R=function(t){return Object(r["a"])("/log/delAll",t)},C=function(){return Object(r["b"])("/home/statistics")},D=function(t){return Object(r["b"])("/quartzJob/getAllByPage",t)},q=function(t){return Object(r["c"])("/quartzJob/add",t)},E=function(t){return Object(r["c"])("/quartzJob/edit",t)},N=function(t){return Object(r["c"])("/quartzJob/pause",t)},V=function(t){return Object(r["c"])("/quartzJob/resume",t)},z=function(t,e){return Object(r["a"])("/quartzJob/delByIds/".concat(t),e)}},"52e9":function(t,e,n){},"8a15":function(t,e,n){"use strict";var r=n("52e9"),o=n.n(r);o.a}}]);