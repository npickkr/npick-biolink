# N픽 바이오링크

GitHub Pages용 정적 바이오링크입니다. 홈페이지의 검색창에서 상품명 또는 번호를 검색하면 상품 결과가 나옵니다. 상품 상세 목록은 각 HTML 페이지에서 확인할 수 있습니다.

## 배포할 파일 위치
아래 파일은 저장소 최상위(root)에 함께 두세요. HTML은 같은 폴더의 `product-data.js`를 읽습니다.

- `index.html`
- `product-data.js`
- `page1.html`, `page3.html`, `page4.html`, `page5.html`
- `npick_recommended_stays.html`
- `assets/` 폴더와 아래 이미지 파일

assets 폴더에 필요한 파일: `npick-profile.png`, `info.jpg`, `hotel.jpg`, `childcare.jpg`, `gift.jpg`, `holiday-gift.jpg`.

## GitHub Pages 설정
1. 위 파일과 폴더를 저장소의 `main` 브랜치 최상위에 업로드합니다.
2. Settings → Pages에서 `Deploy from a branch`, `main`, `/(root)`를 선택합니다.
3. 배포 후 홈페이지 검색창에 `1-1` 또는 상품명(예: 수저세트)을 입력해 확인합니다.

## 상품 데이터 상태
- 현재 `page1Products`에 44개 상품이 등록되어 있습니다.
- `stayProducts`, `page3Products`, `page4Products`, `page5Products`는 비어 있습니다. 해당 페이지에 상품을 보이게 하려면 상품 객체를 해당 배열에 추가해야 합니다.
- 홈페이지는 검색 전에는 카테고리 카드만 보여주고, 상품 결과는 검색어를 입력했을 때 표시합니다.
- 이제 상세 페이지에서 데이터 파일이 누락된 경우와 해당 페이지의 상품 배열이 비어 있는 경우를 서로 다른 안내로 표시합니다.

상품 데이터 형식 예시:

```js
{ number: '3-1', title: '상품명', partner: '네이버', image: 'https://...', alt: '상품 이미지 설명', url: 'https://...' }
```
