/* N픽 공통 상품 데이터
   페이지 1~5의 상품 추가/수정은 이 파일 한 곳에서만 진행합니다.
*/
const page1Products = [];
const stayProducts = [];
const page3Products = [
  {number:'3-1', title:'자수 고리수건', partner:'네이버', image:'./images/수건1.jpg', alt:'자수 고리수건', url:'https://naver.me/xIF6jEM4'},
  {number:'3-1', title:'자수 고리수건', partner:'쿠팡', image:'./images/수건2.jpg', alt:'자수 고리수건', url:'https://link.coupang.com/a/ikBlFKE9MO'},
  {number:'3-2', title:'수저세트', partner:'네이버', image:'./images/수저1.jpg', alt:'수저세트', url:'https://naver.me/5homGEN7'},
  {number:'3-2', title:'수저세트', partner:'쿠팡', image:'./images/수저2.jpg', alt:'수저세트', url:'https://link.coupang.com/a/ikBB2ulige'},
  {number:'3-2', title:'수저세트', partner:'네이버', image:'./images/수저3.png', url:'https://naver.me/xnO2xnrl'},
  {number:'3-3', title:'원터치 빨대컵', partner:'네이버', image:'./images/물컵1.jpg', alt:'원터치 빨대컵', url:'https://naver.me/x3c45m3k'},
  {number:'3-3', title:'자기주도 빨대컵', partner:'네이버', image:'./images/물컵2.jpg', alt:'자기주도 빨대컵', url:'https://naver.me/FTdvFXfV'},
  {number:'3-3', title:'각인 텀블러', partner:'쿠팡', image:'./images/물컵3.png', alt:'각인 텀블러', url:'https://link.coupang.com/a/ikBSNSAri8'},
  {number:'3-4', title:'네임 칫솔(24개월~)', partner:'네이버', image:'./images/칫솔1.jpg', alt:'네임 칫솔(24개월~)', url:'https://naver.me/FfsnbB4h'},
  {number:'3-4', title:'치과 칫솔', partner:'쿠팡', image:'./images/칫솔2.jpg', alt:'치과 칫솔', url:'https://link.coupang.com/a/ikB7feyygm'},
  {number:'3-5', title:'무불소 치약', partner:'네이버', image:'./images/치약1.jpg', alt:'무불소 치약', url:'https://naver.me/5Jq5KqHa'},
  {number:'3-5', title:'아기 고불소 치약', partner:'쿠팡', image:'./images/치약2.jpg', alt:'아기 고불소 치약', url:'https://link.coupang.com/a/ikCbWg7iiO'},
  {number:'3-5', title:'불소 치약', partner:'네이버', image:'./images/치약3.jpg', alt:'불소 치약', url:'https://naver.me/xaT4GfbT'},
  {number:'3-6', title:'각인 양치컵', partner:'네이버', image:'./images/양치컵1.jpg', alt:'각인 양치컵', url:'https://naver.me/xm0cGx2k'},
  {number:'3-6', title:'각인 양치컵', partner:'쿠팡', image:'./images/양치컵2.jpg', alt:'각인 양치컵', url:'https://link.coupang.com/a/ikCiqxUT7c'},
  {number:'3-7', title:'낮잠이불', partner:'네이버', image:'./images/낮잠이불1.jpg', alt:'낮잠이불', url:'https://naver.me/xqbaBiJy'},
  {number:'3-7', title:'낮잠이불', partner:'쿠팡', image:'./images/낮잠이불2.png', alt:'낮잠이불', url:'https://link.coupang.com/a/ikzZmIwPYq'},
  {number:'3-7', title:'낮잠이불', partner:'네이버', image:'./images/낮잠이불3.jpg', alt:'낮잠이불', url:'https://naver.me/51u2SYj5'},
  {number:'3-7', title:'낮잠이불', partner:'쿠팡', image:'./images/낮잠이불4.jpg', alt:'낮잠이불', url:'https://link.coupang.com/a/ikAeDj2M6C'},
  {number:'3-7', title:'낮잠이불', partner:'네이버', image:'./images/낮잠이불5.jpg', alt:'낮잠이불', url:'https://naver.me/x7edFulM'},
  {number:'3-7', title:'낮잠이불', partner:'쿠팡', image:'./images/낮잠이불6.jpg', alt:'낮잠이불', url:'https://link.coupang.com/a/ikADDE19H2'},
  {number:'3-7', title:'낮잠이불', partner:'네이버', image:'./images/낮잠이불7.jpg', alt:'낮잠이불', url:'https://naver.me/xxo26KrX'},
  {number:'3-8', title:'각인 실내화', partner:'쿠팡', image:'./images/실내화1.png', alt:'각인 실내화', url:'https://link.coupang.com/a/ioEhFgHDfE'},
  {number:'3-8', title:'미끄럼방지 실내화', partner:'네이버', image:'./images/실내화2.png', alt:'미끄럼방지 실내화', url:'https://naver.me/Fka1UWzX'},
  {number:'3-9', title:'투명 방수 파우치', partner:'네이버', image:'./images/파우치1.jpg', alt:'투명 방수 파우치', url:'https://naver.me/5B0qa5ak'},
  {number:'3-9', title:'생활 방수 파우치', partner:'쿠팡', image:'./images/파우치2.jpg', alt:'생활 방수 파우치', url:'https://link.coupang.com/a/ikCu6L6AfI'},
  {number:'3-10', title:'용도별 지퍼백', partner:'네이버', image:'./images/지퍼백1.jpg', alt:'용도별 지퍼백', url:'https://naver.me/xJczUco5'},
  {number:'3-10', title:'용도별 지퍼백', partner:'쿠팡', image:'./images/지퍼백2.jpg', alt:'용도별 지퍼백', url:'https://link.coupang.com/a/ikCLeDQFnE'},
  {number:'3-11', title:'방수 네임스티커', partner:'네이버', image:'./images/스티커1.jpg', alt:'방수 네임스티커', url:'https://naver.me/FKGI8Fm5'},
  {number:'3-11', title:'배경 없는 스티커', partner:'쿠팡', image:'./images/스티커2.jpg', alt:'배경 없는 스티커', url:'https://link.coupang.com/a/ikCprxkWA0'},
  {number:'3-12', title:'엠보 촉촉 물티슈', partner:'네이버', image:'./images/물티슈1.jpg', alt:'엠보 촉촉 물티슈', url:'https://naver.me/FyAwM2vK'},
  {number:'3-12', title:'생분해 물티슈', partner:'네이버', image:'./images/물티슈2.jpg', alt:'생분해 물티슈', url:'https://naver.me/GdThAyMC'},
  {number:'3-12', title:'영유아 물티슈', partner:'쿠팡', image:'./images/물티슈3.jpg', alt:'영유아 물티슈', url:'https://link.coupang.com/a/ikCTpko2NM'},
  {number:'3-13', title:'뚜껑+식판 세트', partner:'쿠팡', image:'./images/식판_대표사진.jpg', alt:'뚜껑+식판 세트', url:'https://link.coupang.com/a/inUHp7jMBw'},
  {number:'3-14', title:'실리콘 턱받이', partner:'쿠팡', image:'./images/턱받이.jpg', alt:'실리콘 턱받이', url:'https://link.coupang.com/a/ikwjuIKOWa'},
  {number:'3-15', title:'비건 보습 로션', partner:'네이버', image:'./images/로션1.jpg', alt:'비건 보습 로션', url:'https://naver.me/GkIHup5q'},
  {number:'3-15', title:'산양유 크림', partner:'쿠팡', image:'./images/로션2.jpg', alt:'산양유 크림', url:'https://link.coupang.com/a/ikC4GkOLDg'},
  {number:'3-15', title:'베이비 로션+크림', partner:'네이버', image:'./images/로션3.png', alt:'베이비 로션+크림', url:'https://naver.me/FWTGW1J9'},
  {number:'3-16', title:'부드러운 각티슈', partner:'네이버', image:'./images/각티슈1.jpg', alt:'부드러운 각티슈', url:'https://naver.me/5c8MGNEy'},
  {number:'3-16', title:'미용 각티슈', partner:'쿠팡', image:'./images/각티슈2.jpg', alt:'미용 각티슈', url:'https://link.coupang.com/a/ikDm9Hlt2i'},
  {number:'3-17', title:'두루마리 화장지', partner:'네이버', image:'./images/두루마리1.png', alt:'두루마리 화장지', url:'https://naver.me/5p0mxDlU'},
  {number:'3-17', title:'천연펄프 무형광 두루마리', partner:'쿠팡', image:'./images/두루마리2.png', alt:'천연펄프 무형광 두루마리', url:'https://link.coupang.com/a/ikDrUBsjF6'},
  {number:'3-18', title:'무향 손세정제', partner:'네이버', image:'./images/손세정제1.jpg', alt:'무향 손세정제', url:'https://naver.me/GP2CxyH9'},
  {number:'3-18', title:'베이비파우더향 손세정제', partner:'쿠팡', image:'./images/손세정제2.jpg', alt:'베이비파우더향 손세정제', url:'https://link.coupang.com/a/ikDxawGRJ6'},
];
const page4Products = [];
const page5Products = [];
window.NPICK_PRODUCTS = {
  page1Products, stayProducts, page3Products, page4Products, page5Products,
  usefulInfoProducts: page3Products,
  allProducts: [...page1Products, ...stayProducts, ...page3Products, ...page4Products, ...page5Products]
};
