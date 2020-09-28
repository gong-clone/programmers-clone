const listCompany = [
  {
    name: 'Kakao',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-kakao-29655f01b5e94e5cb2ef0a8015c80ba7.png?alt=media&token=c5e50fd3-54c0-4ee6-b18b-35b393ad007c',
  },
  {
    name: 'Line',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-line-7869c9a99086903590b88c84187968f9.png?alt=media&token=7034aa1d-d25c-4f52-9ac4-babb71f3641e',
  },
  {
    name: 'Naver',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-naver-8755e9490883822d2fbd18156abb5129.png?alt=media&token=f3107c34-ed58-4280-b55f-be2077409ae5',
  },
  {
    name: '11st',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-11st-da268e71256eb265a153d1592decef4d.png?alt=media&token=92bab7fc-c9b8-4185-9fcf-5416d67084e8',
  },
  {
    name: 'DeliveryHero',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-deliveryhero-0b5c6ff3581230443e6c53540d9aba10.png?alt=media&token=fa5c9edf-ce96-43d4-98e2-06f4ba690720',
  },
  {
    name: 'KakaoCommerce',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-kakaocommerce-9f373b1718badc1fac01d007bd112e1a.png?alt=media&token=881b3a5d-8d95-40e8-8f67-36726579bd12',
  },
  {
    name: 'KakaoEnterprise',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-kakaoenterprise-58a8002b013479b78190bf6b3267d450.png?alt=media&token=0160a305-e2c6-45b5-a93a-4ec5464cab6e',
  },
  {
    name: 'woowahan',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-woowahan-80f85ab6f3e1bfbb8a34caf8ad2004c5.png?alt=media&token=258cce5d-bd21-4834-ac92-410e605c36ac',
  },
  {
    name: 'Netmarble',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-netmarble-7651c92d17baa317914e4be62bb44cc5.png?alt=media&token=5b6f73dc-8205-43fb-b37d-585d7fac1204',
  },
  {
    name: 'carrotmarket',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-carrotmarket-1724127b304026ef57af0c726e2ad8d3.png?alt=media&token=2ac08c5a-1172-4106-8cdf-89f8f3a023e4',
  },
  {
    name: 'Watcha',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-watcha-a5c69a81c338fb99da5127386d87706d.png?alt=media&token=ee3c6f30-a426-43f3-9e68-931afbf8d8f0',
  },
  {
    name: 'Coupang',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-coupang-fa24b0caf90202f86f961faba57d8b09.png?alt=media&token=a329e191-917f-4e1c-a2d5-1e5f05b84dbe',
  },
  {
    name: 'SoCar',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-socar-9fbafa251156445ffc9f2c5ec7b03b27.png?alt=media&token=d62ebc19-1b93-4a4d-a94f-581efbdd1aaf',
  },
  {
    name: 'Vcnc',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-vcnc-b6b3a360db734735c6f54075e6555dcc.png?alt=media&token=868d60e9-dd6a-499c-abea-00e23ff76260',
  },
  {
    name: 'Estsoft',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-estsoft-19f031305f18119945cf3edb323addff.png?alt=media&token=e14174cc-a50b-4268-ab97-102a6a78b9da',
  },
  {
    name: 'Krafton',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-krafton-f69264c31067dd12c7eb97df0dd04904.png?alt=media&token=3b2c64df-e719-46b1-8311-8af12fd25d10',
  },
  {
    name: 'DramaCompany',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-dramacompany-f5547e4f6355b3ed7e3bda0913e8121f.png?alt=media&token=963c7297-2e8a-428f-a1c5-5aa65e1f9a52',
  },
  {
    name: 'zigbang',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-zigbang-d81361c31265125b3681778d474868f0.png?alt=media&token=00728013-83bb-40a8-80ef-fb703115f28b',
  },
  {
    name: 'myRealTrip',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-myrealtrip-8c2360f37fd94772bcae7a4d9f660d5b.png?alt=media&token=3d23e4ab-2854-4cac-9dd3-61581cddf975',
  },
  {
    name: 'Dreamus',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-dreamus-36ccab9ff9e70ed91815652ba6795a95.png?alt=media&token=ff3636c2-2f4c-4d91-bd5b-18405a63dd95',
  },
  {
    name: 'EA',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-ea-676b21287dcf7457810fe0c6279e016c.png?alt=media&token=605b0dc8-607a-42ea-add9-1de3cf7029a2',
  },
  {
    name: 'DailyHotel',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-dailyhotel-51cc330ec6406f7e3cc188c0861e4447.png?alt=media&token=fc3e885a-02e1-4730-8e50-99f0d76cca04',
  },
  {
    name: 'Mojitok',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-platfarm-5d6c435d6a63bb3968e24b421801fd61.png?alt=media&token=d5861962-0fef-490c-9d29-b7df55bf96c9',
  },
  {
    name: 'Qara',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-qara-55c57a869fc419026f901e46f362de88.png?alt=media&token=9b9e2dee-1c8b-41ac-b374-5257a3f96298',
  },
  {
    name: 'SmartStudy',
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Four-partner%2Fimg-logo-smartstudy-6bb5ae9f6300bbde1f18c4c1bb0bb68a.png?alt=media&token=372c634e-a210-4bbf-9b94-2ad15dd2edf5',
  },
]

export default listCompany
