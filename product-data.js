/* N픽 공통 상품 데이터
   페이지 1~5의 상품 추가/수정은 이 파일 한 곳에서만 진행합니다.
*/
const page1Products = [
  {number:'1-1', title:'자수 고리수건', partner:'네이버', image:'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=360&q=80', alt:'자수 고리수건', url:'https://naver.me/xIF6jEM4'},
  {number:'1-2', title:'자수 고리수건', partner:'쿠팡', image:'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=360&q=80', alt:'자수 고리수건', url:'https://link.coupang.com/a/ikBlFKE9MO'},
  {number:'2-1', title:'수저세트', partner:'네이버', image:'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=360&q=80', alt:'수저세트', url:'https://naver.me/5homGEN7'},
  {number:'2-2', title:'수저세트', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=360&q=80', alt:'수저세트', url:'https://link.coupang.com/a/ikBB2ulige'},
  {number:'2-3', title:'수저세트', partner:'네이버', image:'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=360&q=80', alt:'수저세트', url:'https://naver.me/xnO2xnrl'},
  {number:'3-1', title:'원터치 빨대컵', partner:'네이버', image:'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=360&q=80', alt:'원터치 빨대컵', url:'https://naver.me/x3c45m3k'},
  {number:'3-2', title:'자기주도 빨대컵', partner:'네이버', image:'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=360&q=80', alt:'자기주도 빨대컵', url:'https://naver.me/FTdvFXfV'},
  {number:'3-3', title:'각인 텀블러', partner:'쿠팡', image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=360&q=80', alt:'각인 텀블러', url:'https://link.coupang.com/a/ikBSNSAri8'},
  {number:'4-1', title:'네임 칫솔(24개월~)', partner:'네이버', image:'https://images.unsplash.com/photo-1559599107-f81b379ebf12?auto=format&fit=crop&w=360&q=80', alt:'네임 칫솔(24개월~)', url:'https://naver.me/FfsnbB4h'},
  {number:'4-2', title:'치과 칫솔', partner:'쿠팡', image:'https://images.unsplash.com/photo-1559599107-f81b379ebf12?auto=format&fit=crop&w=360&q=80', alt:'치과 칫솔', url:'https://link.coupang.com/a/ikB7feyygm'},
  {number:'5-1', title:'무불소 치약', partner:'네이버', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'무불소 치약', url:'https://naver.me/5Jq5KqHa'},
  {number:'5-2', title:'아기 고불소 치약', partner:'쿠팡', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'아기 고불소 치약', url:'https://link.coupang.com/a/ikCbWg7iiO'},
  {number:'5-3', title:'불소 치약', partner:'네이버', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'불소 치약', url:'https://naver.me/xaT4GfbT'},
  {number:'6-1', title:'각인 양치컵', partner:'네이버', image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=360&q=80', alt:'각인 양치컵', url:'https://naver.me/xm0cGx2k'},
  {number:'6-2', title:'각인 양치컵', partner:'쿠팡', image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=360&q=80', alt:'각인 양치컵', url:'https://link.coupang.com/a/ikCiqxUT7c'},
  {number:'7-1', title:'낮잠이불', partner:'네이버', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://naver.me/xqbaBiJy'},
  {number:'7-2', title:'낮잠이불', partner:'쿠팡', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://link.coupang.com/a/ikzZmIwPYq'},
  {number:'7-3', title:'낮잠이불', partner:'네이버', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://naver.me/51u2SYj5'},
  {number:'7-4', title:'낮잠이불', partner:'쿠팡', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://link.coupang.com/a/ikAeDj2M6C'},
  {number:'7-5', title:'낮잠이불', partner:'네이버', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://naver.me/x7edFulM'},
  {number:'7-6', title:'낮잠이불', partner:'쿠팡', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://link.coupang.com/a/ikADDE19H2'},
  {number:'7-7', title:'낮잠이불', partner:'네이버', image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=360&q=80', alt:'낮잠이불', url:'https://naver.me/xxo26KrX'},
  {number:'8-1', title:'각인 실내화', partner:'쿠팡', image:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=360&q=80', alt:'각인 실내화', url:'https://link.coupang.com/a/ioEhFgHDfE'},
  {number:'8-2', title:'미끄럼방지 실내화', partner:'네이버', image:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=360&q=80', alt:'미끄럼방지 실내화', url:'https://naver.me/Fka1UWzX'},
  {number:'9-1', title:'투명 방수 파우치', partner:'네이버', image:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=360&q=80', alt:'투명 방수 파우치', url:'https://naver.me/5B0qa5ak'},
  {number:'9-2', title:'생활 방수 파우치', partner:'쿠팡', image:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=360&q=80', alt:'생활 방수 파우치', url:'https://link.coupang.com/a/ikCu6L6AfI'},
  {number:'10-1', title:'용도별 지퍼백', partner:'네이버', image:'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=360&q=80', alt:'용도별 지퍼백', url:'https://naver.me/xJczUco5'},
  {number:'10-2', title:'용도별 지퍼백', partner:'쿠팡', image:'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=360&q=80', alt:'용도별 지퍼백', url:'https://link.coupang.com/a/ikCLeDQFnE'},
  {number:'11-1', title:'방수 네임스티커', partner:'네이버', image:'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=360&q=80', alt:'방수 네임스티커', url:'https://naver.me/FKGI8Fm5'},
  {number:'11-2', title:'배경 없는 스티커', partner:'쿠팡', image:'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=360&q=80', alt:'배경 없는 스티커', url:'https://link.coupang.com/a/ikCprxkWA0'},
  {number:'12-1', title:'엠보 촉촉 물티슈', partner:'네이버', image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=360&q=80', alt:'엠보 촉촉 물티슈', url:'https://naver.me/FyAwM2vK'},
  {number:'12-2', title:'생분해 물티슈', partner:'네이버', image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=360&q=80', alt:'생분해 물티슈', url:'https://naver.me/GdThAyMC'},
  {number:'12-3', title:'영유아 물티슈', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=360&q=80', alt:'영유아 물티슈', url:'https://link.coupang.com/a/ikCTpko2NM'},
  {number:'13-1', title:'뚜껑+식판 세트', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=360&q=80', alt:'뚜껑+식판 세트', url:'https://link.coupang.com/a/inUHp7jMBw'},
  {number:'14-1', title:'실리콘 턱받이', partner:'쿠팡', image:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=360&q=80', alt:'실리콘 턱받이', url:'https://link.coupang.com/a/ikwjuIKOWa'},
  {number:'15-1', title:'비건 보습 로션', partner:'네이버', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'비건 보습 로션', url:'https://naver.me/GkIHup5q'},
  {number:'15-2', title:'산양유 크림', partner:'쿠팡', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'산양유 크림', url:'https://link.coupang.com/a/ikC4GkOLDg'},
  {number:'15-3', title:'베이비 로션+크림', partner:'네이버', image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=360&q=80', alt:'베이비 로션+크림', url:'https://naver.me/FWTGW1J9'},
  {number:'16-1', title:'부드러운 각티슈', partner:'네이버', image:'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=360&q=80', alt:'부드러운 각티슈', url:'https://naver.me/5c8MGNEy'},
  {number:'16-2', title:'미용 각티슈', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=360&q=80', alt:'미용 각티슈', url:'https://link.coupang.com/a/ikDm9Hlt2i'},
  {number:'17-1', title:'두루마리 화장지', partner:'네이버', image:'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=360&q=80', alt:'두루마리 화장지', url:'https://naver.me/5p0mxDlU'},
  {number:'17-2', title:'천연펄프 무형광 두루마리', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=360&q=80', alt:'천연펄프 무형광 두루마리', url:'https://link.coupang.com/a/ikDrUBsjF6'},
  {number:'18-1', title:'무향 손세정제', partner:'네이버', image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2-ae?auto=format&fit=crop&w=360&q=80', alt:'무향 손세정제', url:'https://naver.me/GP2CxyH9'},
  {number:'18-2', title:'베이비파우더향 손세정제', partner:'쿠팡', image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=360&q=80', alt:'베이비파우더향 손세정제', url:'https://link.coupang.com/a/ikDxawGRJ6'},
];
const stayProducts = [];
const page3Products = [];
const page4Products = [];
const page5Products = [];
window.NPICK_PRODUCTS = {
  page1Products, stayProducts, page3Products, page4Products, page5Products,
  usefulInfoProducts: page1Products,
  allProducts: [...page1Products, ...stayProducts, ...page3Products, ...page4Products, ...page5Products]
};