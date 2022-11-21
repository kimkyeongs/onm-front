export default[
  {
    menuTitle: '대시보드',
    children: [
      {
        menuTitle: '대시보드',
      }
    ]
  },
  {
    menuTitle: '회원관리',
    children: [
      {
        menuTitle: '고객그룹관리',
      },
      {
        menuTitle: '회원정보관리',
      },
      {
        menuTitle: '인증정보(회원카드)관리'
      },
      { 
        menuTitle: '고객상담관리'
      },
      {
        menuTitle: '민원접수관리'
      },
      {
        menuTitle: '충전기상태 및 제어'
      }
    ]
  },
  {
    menuTitle: '충전인프라관리',
    children: [
      {
        menuTitle: '인프라관리', 
        child: [ '충전기 제조사 관리', '충전기 모델 관리', '충전소 관리', '충전기 관리' ]
      },
      {
        menuTitle: '충전기상태 및 제어',
        child: ['충전소 상태', '충전기 제어']
      },
      {
        menuTitle: '이력정보관리',
        child: ['추전이력', '충전이력(과금형)', '결제이력', '제어이력', '통신이력', '에러이력']
      }
    ]
  },
  {
    menuTitle: '요금 및 프로모션관리',
    children: [
      {
        menuTitle: '프로모션 관리',
        child: ['프로모션 관리', '쿠폰/승인코드 관리']
      },
      {
        menuTitle: '요금제 관리',
        child: ['단가관리', '요금일정관리']
      }
    ]  
   
  },
  {
    menuTitle: '결제정보관리',
    children: [
      {
        menuTitle: '정산관리'
      },
      {
        menuTitle: '미수관리'
      },
      {
        menuTitle: '포인트 관리'
      }
    ]
  },
  {
    menuTitle: '로밍관리',
    children: [
      {
        menuTitle: '전체'
      },
      {
        menuTitle: '충전기 기준'
      },
      {
        menuTitle: '회원기준'
      }
    ]
  },
  {
    menuTitle: '통계관리',
    children: [
      {
        menuTitle: '충전기 통계'
      },
      {
        menuTitle: '회원 통계'
      },
      {
        menuTitle: '장애/고장 통계'
      },
      {
        menuTitle: '충전기 가동률 통계'
      },
      {
        menuTitle: '결제 통계'
      },
    ]
  },
  {
    menuTitle: '시스템관리',
    children: [
      {
        menuTitle: '업체관리'
      },
      {
        menuTitle: '사용자 관리'
      },
      {
        menuTitle: '메뉴권한 그룹관리'
      },
      {
        menuTitle: '그룹별 사용자 관리'
      },
      {
        menuTitle: '로그인 모니터링'
      },
      {
        menuTitle: '공통코드 관리'
      },
      {
        menuTitle: '공지사항 관리'
      }
    ]
  }
]
