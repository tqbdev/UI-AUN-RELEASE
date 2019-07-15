webpackJsonp([16],{"./src/modules/roles/admin/actions.js":function(e,t,n){"use strict";n.d(t,"m",function(){return u}),n.d(t,"i",function(){return s}),n.d(t,"n",function(){return c}),n.d(t,"o",function(){return o}),n.d(t,"v",function(){return i}),n.d(t,"l",function(){return a}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return b}),n.d(t,"x",function(){return f}),n.d(t,"y",function(){return E}),n.d(t,"p",function(){return l}),n.d(t,"t",function(){return m}),n.d(t,"f",function(){return _}),n.d(t,"q",function(){return g}),n.d(t,"r",function(){return p}),n.d(t,"b",function(){return v}),n.d(t,"a",function(){return S}),n.d(t,"c",function(){return I}),n.d(t,"d",function(){return j}),n.d(t,"s",function(){return C}),n.d(t,"u",function(){return O}),n.d(t,"w",function(){return A}),n.d(t,"e",function(){return T}),n.d(t,"g",function(){return R}),n.d(t,"h",function(){return y});var r=n("./packages/store/index.js"),u=Object(r.b)("SARS_GET_ALL",function(){return""}),s=Object(r.b)("CRITERIONS_SAR_GET_ALL",function(e){return"ReversionId="+e}),c=Object(r.b)("SUBCRITERIONS_CRI_GET_ALL",function(e){return"CriterionId="+e}),o=Object(r.b)("SUGGESTS_CRI_GET_ALL",function(e){return"CriterionId="+e}),i=Object(r.b)("SUBCRI_UPDATE_CONTENT_ONE",function(e,t){return{id:e,data:{attributes:{content:t}}}}),a=Object(r.b)("EVIDENCES_SAR_GET_ALL",function(e){return"SuggestionId="+e}),d=Object(r.b)("EVIDENCES_SAR_GET_ALL_REF",function(e){return"EvidenceId="+e}),b=Object(r.b)("EVIDENCES_SAR_GET_ALL_FULL",function(e){return"CriterionId="+e}),f=Object(r.b)("SUG_UPDATE_STT",function(e,t){return{id:e,data:{attributes:{status:t}}}}),E=Object(r.b)("EVIDENCES_SAR_UPLOAD",function(e){return e}),l=Object(r.b)("EVIDENCES_SAR_LINK",function(e){return e}),m=Object(r.b)("EVIDENCES_SAR_UPDATE",function(e,t){return{id:e,data:{attributes:{name:t}}}}),_=Object(r.b)("EVIDENCES_SAR_DELETE",function(e){return{id:e}}),g=Object(r.b)("RESET_BEHAVIOR_ACTION"),p=Object(r.b)("RESET_STATE_ACTION"),v=Object(r.b)("SAR_CREATE",function(e){return{data:{name:e}}}),S=Object(r.b)("CRI_CREATE",function(e,t){return{name:e,description:e,ReversionId:t}}),I=Object(r.b)("SUB_CRI_CREATE",function(e,t){return{name:e,content:e,CriterionId:t}}),j=Object(r.b)("SUG_CREATE",function(e,t,n){return{content:e,type:t,CriterionId:n}}),C=Object(r.b)("CRI_UPDATE",function(e,t){return{id:t,data:{attributes:{name:e.slice(0,20),description:e}}}}),O=Object(r.b)("SUB_CRI_UPDATE",function(e,t){return{id:t,data:{attributes:{name:e.slice(0,20),content:e}}}}),A=Object(r.b)("SUG_UPDATE",function(e,t,n){return{id:n,data:{attributes:{content:e,type:t}}}}),T=Object(r.b)("CRI_DELETE",function(e){return{id:e}}),R=Object(r.b)("SUBCRI_DELETE",function(e){return{id:e}}),y=Object(r.b)("SUG_SAR_DELETE",function(e){return{id:e}})},"./src/modules/roles/admin/reducers.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AdminView",function(){return d});var r,u=n("./node_modules/babel-runtime/core-js/object/assign.js"),s=n.n(u),c=n("./node_modules/immutable/dist/immutable.js"),o=(n.n(c),n("./node_modules/redux-actions/es/index.js")),i=n("./src/modules/roles/admin/actions.js"),a=Object(c.fromJS)({status:"",behavior:"",error:"",sars:[],cris:[],subcris:[],suggests:[],evidences:[],evidencesFull:[],references:[]}),d=Object(o.b)(((r={})[i.m.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",sars:n.templates})},r[i.m.error]=function(e,t){var n=t.payload.data;return e.merge({status:"error",behavior:"",error:n})},r[i.i.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",cris:n.map(function(e){var t=e.id;return{title:e.name,content:e.description,key:"cri",subkey:"subcri",id:t,supID:e.SARId}}),subcris:[],suggests:[]})},r[i.n.done]=function(e,t){var n=t.payload,r=e.toJS().cris,u=void 0,c=n.map(function(e){var t=e.id,n=e.name,r=e.content,s=e.CriterionId;return u||(u=s),{title:n,content:r,id:t,key:"subcri",subkey:"suggest",supID:s}});return e.merge({status:"success",behavior:"get",cris:r.map(function(e){return""+e.id==""+u?s()({},e,{children:c}):e}),subcris:c})},r[i.o.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",suggests:["IMPLICATION","QUESTION","EVIDENCE"].map(function(e,t){return{id:e,name:e,children:n.filter(function(t){return t.type===e})}})})},r[i.l.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",evidences:n})},r[i.j.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",references:n})},r[i.k.done]=function(e,t){var n=t.payload;return e.merge({status:"success",behavior:"get",evidencesFull:n})},r[i.v.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"update"})},r[i.y.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"upload"})},r[i.t.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"upload"})},r[i.f.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"upload"})},r[i.p.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"upload"})},r[i.x.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"updateSug"})},r[i.q]=function(e){return e.merge({status:"",behavior:"",error:""})},r[i.r]=function(e){return e.merge({status:"",behavior:"",error:"",sars:[],cris:[],subcris:[],suggests:[],evidences:[],evidencesFull:[],references:[]})},r[i.b.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"create"})},r[i.a.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"createCri"})},r[i.c.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"createSubCri"})},r[i.d.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"createSug"})},r[i.s.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"updateCri"})},r[i.u.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"updateSubCri"})},r[i.w.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"updateSug"})},r[i.e.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"deleteCri"})},r[i.g.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"deleteSubCri"})},r[i.h.done]=function(e,t){t.payload;return e.merge({status:"success",behavior:"deleteSug"})},r),a)}});