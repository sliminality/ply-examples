!function(){var e=webpackJsonp([25],{12292:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o(8);t.default=(0,r.Shape)({name:r.Types.string,description:r.Types.string,thumbnail:r.Types.string,recommended:r.Types.bool,geometry:(0,r.Shape)({type:r.Types.string,coordinates:r.Types.arrayOf(r.Types.arrayOf(r.Types.arrayOf(r.Types.arrayOf(r.Types.number))))}),centerLat:r.Types.number,centerLng:r.Types.number}),e.exports=t.default},5196:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),l=babelHelpers.interopRequireDefault(r),a=o(3),n=babelHelpers.interopRequireDefault(a),i=o(1),d=o(108),s=babelHelpers.interopRequireDefault(d),u=o(112),h=babelHelpers.interopRequireDefault(u),b=o(5),c=babelHelpers.interopRequireDefault(b),p=o(37),f=babelHelpers.interopRequireDefault(p),g=o(131),m=babelHelpers.interopRequireDefault(g),y=o(123),v=babelHelpers.interopRequireDefault(y),x=o(518),E=babelHelpers.interopRequireDefault(x),C=o(1399),H=babelHelpers.interopRequireDefault(C),T=o(12292),N=babelHelpers.interopRequireDefault(T),R=o(332),P=babelHelpers.interopRequireDefault(R),k=Object.assign({neighborhood:N.default.isRequired,neighborhoods:r.PropTypes.arrayOf(N.default).isRequired,clickedNeighborhoodIndex:r.PropTypes.number.isRequired,onNeighborhoodChanged:r.PropTypes.func},i.withStylesPropTypes),q=function(e){function t(e){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handlePrevious=o.handlePrevious.bind(o),o.handleNext=o.handleNext.bind(o),o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"handleClose",value:function(){function e(){H.default.setNeighborhoodsVisible(!1),P.default.trackNeighborhoodCardClose()}return e}()},{key:"handlePrevious",value:function(){function e(){var e=this.props,t=e.clickedNeighborhoodIndex,o=e.onNeighborhoodChanged,r=e.neighborhoods;if(0!==t){var l=t-1;H.default.setClickedNeighborhoodIndex(l),o&&o(r[l])}}return e}()},{key:"handleNext",value:function(){function e(){var e=this.props,t=e.clickedNeighborhoodIndex,o=e.neighborhoods,r=e.onNeighborhoodChanged;if(!(t>=o.length-1)){var l=t+1;H.default.setClickedNeighborhoodIndex(l),r&&r(o[l])}}return e}()},{key:"render",value:function(){function e(){var e=this.props,t=e.neighborhood,o=e.neighborhoods,r=e.clickedNeighborhoodIndex,a=e.styles,d=0===r,u=r>=o.length-1;return l.default.createElement("div",(0,i.css)(a.neighborhoodCardWrapper),l.default.createElement("div",(0,i.css)(a.btnClose),l.default.createElement(f.default,{icon:l.default.createElement(E.default,{size:13}),onPress:this.handleClose})),l.default.createElement("div",(0,i.css)(a.btnPrevious),l.default.createElement(f.default,{icon:l.default.createElement(m.default,null),disabled:d,onPress:this.handlePrevious})),l.default.createElement("div",(0,i.css)(a.btnNext),l.default.createElement(f.default,{icon:l.default.createElement(v.default,null),disabled:u,onPress:this.handleNext})),l.default.createElement("div",(0,i.css)(a.neighborhoodCard),l.default.createElement("div",(0,i.css)(a.neighborhoodImgWrapper),l.default.createElement("img",babelHelpers.extends({src:t.thumbnail,alt:""},(0,i.css)(a.neighborhoodImg)))),l.default.createElement("div",(0,i.css)(a.neighborhoodContent),l.default.createElement(h.default,null,l.default.createElement(s.default,{sm:12},l.default.createElement(c.default,{bottom:1},l.default.createElement("div",(0,i.css)(a.neighborhoodHeader),l.default.createElement("div",(0,i.css)(a.neighborhoodTitle),l.default.createElement("div",{className:"h4"},t.name)),t.recommended&&l.default.createElement("div",(0,i.css)(a.recommendationLabel),l.default.createElement(n.default,{k:"china_neighborhood.intro_card.Local Recommended Label"})))))),l.default.createElement("div",(0,i.css)(a.neighborhoodDescription),t.description))))}return e}()}]),t}(l.default.Component);q.propTypes=k,t.default=(0,i.withStyles)(function(e){var t=e.color,o=e.unit,r=e.font;return{neighborhoodCardWrapper:{background:t.white,height:17*o,"border-radius":.25*o,position:"absolute",bottom:6.25*o,left:2*o,right:2*o},btnClose:{right:2*o,top:2*o,position:"absolute"},btnPrevious:{position:"absolute",left:2*o,top:7.5*o},btnNext:{position:"absolute",right:2*o,top:7.5*o},neighborhoodCard:{padding:3*o+"px "+4.75*o+"px",transition:"all 1s ease-in-out"},neighborhoodImgWrapper:{"margin-right":2*o,float:"left",display:"table-cell"},neighborhoodImg:{width:11*o,height:11*o},neighborhoodContent:{display:"table-cell"},neighborhoodHeader:{"margin-bottom":o,display:"table-cell"},neighborhoodTitle:{float:"left"},recommendationLabel:{border:"solid 1px "+String(t.core.arches),"border-radius":.5*o,"margin-left":1.25*o,color:t.core.arches,fontSize:r.textMicro.fontSize,padding:"0px "+.625*o+"px",float:"left",display:"none"},neighborhoodDescription:{fontSize:r.textSmall.fontSize}}})(q),e.exports=t.default}});"object"==typeof module&&(module.exports=e)}();