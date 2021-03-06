# 요구사항
* 브라우저 상에서 동작하는 포스트잇 보드를 제작해주세요. -> 완료
* 레이아웃은 좌측의 보드목록, 우측의 보드로 구성됩니다 -> 완료
* 보드목록 최하단의 [+] 버튼을 누르면 새로운 보드가 생성됩니다. -> 완료
* 보드목록의 보드명 오른쪽에 삭제 버튼이 보이고 클릭하여 삭제할 수 있습니다. -> 완료
* 보드의 상단에는 보드명이 나타납니다. 보드명을 클릭하여 수정할 수 있습니다. -> 완료
* 보드 바닥을 더블클릭하면, 빈 포스트가 생성됩니다. -> 완료
* 포스트의 제목과 본문을 클릭하면 수정할 수 있는 상태로 바뀌고, 저장/취소를 눌러 수정 내용을 저장하거나 취소할 수 있습니다. -> 완료
* 포스트의 타이틀 영역 우측 상단의 [–] 버튼을 클릭하여 본문 영역을 숨겼다 보여줄 수 있습니다. -> 완료
* 포스트의 타이틀 영역 우측 상단의 [X] 버튼을 클릭하여 메모를 삭제할 수 있습니다. 이 때, 제목이나 본문에 내용이 있을 경우에는 “정말 삭제하시겠습니까?” 라는 확인 다이얼로그가 나타납니다. -> 버튼누르면 바로 삭제
* ctrl(or cmd)+ alt + N 을입력하면, 빈 포스트잇이 생성된 후 제목을 수정할 수 있는 상태가 됩니다. -> X
* 데이터는 persist storage에 저장되어 페이지 새로고침을 해도 데이터가 유지됩니다. (local storage, indexed db 등을 이용해주세요. 서버를 추가로 개발하실 필요는 없습니다.) -> X
---
# 회고
* 전체상태, 선택상태를 모듈로 나눠서 구현했는데 계속 진행하다보니깐 설계가 좀 잘못된 것 같다고 느꼈다. 이미 진행을 너무 많이하고 제출 시간이 촉박하여 돌아갈 여유가 없었다. 초기 설계의 중요성을 깨달았다. 
* 변화가 일어날때 전체상태와 선택상태 둘다 중복된 부분을 고쳐야하다 보니깐 쓸데없이 모듈을 작성하며 시간을 많이 낭비하고 중복되는 로직이기때문에 코드가 길어져서 가독성이 좋지 않았다.
* postit이 여러개가 추가가 되질 않는다. post올릴때마다 id값을 1씩 카운터 상태를 올려줬는데 이상하게 상태 변화가 없고 다시 초기값으로 초기화가 된다. 아직도 왜그런지 모르겠다.
* 타입스크립트를 이론적으로만 공부했었는데 이번기회에 미니프로젝트에 직접 타입을 다뤄볼수있어서 좋았다. 타입스크립트 에러보는법은 아직도 어렵지만, 하나하나 구글링해서 알아가는 재미가 또 있다.
* 프로젝트때 리덕스 설계를 맡은 기능부분만 해서 전체를 이해하기가 어려웠는데 이번기회에 action객체 만드는법 createAction만드는법 reducer함수만드는법 store에 저장하는법 dispatch함수 만드는법 useSelector를 통한 상태값가져오기 등 다뤄볼 수 있어서 실력향상에 도움이 많이 되었다.
* 시간내에 제출하기 위해 마지막 몇가지 요구사항을 구현하지 못해서 아쉬웠다.
* 예전에 새로고침해도 redux상태값을 저장하려면 redux-persist라는 라이브러리를 이용하면 쉽게 구현할 수 있다고 자료를 찾아 본 적이 있는데 마지막 요구사항은 그 부분을 묻는거 같았다, 타입스크립트 문법을 적응하는데 시간이 오래걸려서 생각만하고 따로 적용하지 못해 아쉬웠다. 
* 요구사항대로 리덕스를 사용해서 구현을 했지만, 프로젝트 규모가 작다보니 props로 상태관리 해도 됐을법했다. 
---
# 추가적으로 사용한 라이브러리
    "@emotion/react": "^11.7.0", -> CSS in JS className을 지정 안해줘도 된다. jsx html태그 내부에 css style을 줄수가있다. props를 이용하여 동적으로 CSS구현
    "@emotion/styled": "^11.6.0", -> CSS in JS className을 지정 안해줘도 된다. 지역적으로 관리되는 CSS, 여러개의 태그를 묶어서 스타일을 줄 수 있다. props를 이용하여 동적으로 CSS구현가능
    "react-icons": "^4.3.1",-> icon을 사용하기위해 
    "redux-devtools-extension": "^2.13.9", -> 크롬브라우저에서 리덕스 디버깅을 위해 사용
    "redux-saga": "^1.1.3", -> 설치했으나 도입을 하지않았다, thunk미들웨어를 통해 비동기구현 가능하므로 따로 공부하지 않았다.
    "typesafe-actions": "^5.1.0", -> 타입이 안전한 createAction함수를 만들어준다
    "typescript": "^4.1.2", -> 정교한 타입설정을 통해 에러를 캐치해준다. 자바스크립트 런타임 이전에 컴파일이 가능하게 해준다. 
---
# 과제 피드백

- redux action 호출하는 모듈을 hook으로 분리한 점이 좋았어요.
- 과제 완료 후 회고를 진행한 점이 좋았어요.
- 주석처리된 코드들이 여러군데 보여요. VCS에 history가 다 남으니 불필요한 코드는 과감히 지워주세요.
- 문제를 정의하고 해결해나가는 과정이 커밋 로그에 안 보여요. 다른 개발자와 협업할 때 커밋 단위로 코드를 이해하게 될 텐데, 로컬에서 개인이 작업한듯이 커밋이 이루어져 있어요. 작업 후 remote에 push하기 전에 커밋을 정리하면 더 좋겠어요.
- 전체적으로 변수나 함수의 이름이 하는 역할/기능과 안 맞는 부분이 많다는 느낌을 받았어요.
 

# 회고 내용에 대한 피드백

1. 전체상태, 선택상태를 모듈로 나눠서 구현했는데 계속 진행하다보니깐 설계가 좀 잘못된 것 같다고 느꼈다. 이미 진행을 너무 많이하고 제출 시간이 촉박하여 돌아갈 여유가 없었다.

-> 깨달았을 때 제출기한까지 아직 시간이 좀 있었던거 같아요. 전체 기능을 다 구현하지 못 하더라도 깨달았을 때 바로 설계를 수정해서 구현해 나가는 모습이 커밋 로그에 보였으면 더 좋았을 것 같아요.
 

2.postit이 여러개가 추가가 되질 않는다. post올릴때마다 id값을 1씩 카운터 상태를 올려줬는데 이상하게 상태 변화가 없고 다시 초기값으로 초기화가 된다. 아직도 왜그런지 모르겠다.

->Postit 컴포넌트에서 state로 postNum을 가져가는 구조로 되어 있어요. 이렇게 할 경우 모든 Postit 컴포넌트에서 postNum을 각자 1로 가져갈 것이고, addPost에 payload로 넘어가는 id는 항상 1이 되요. Id 부여를 reducer에서 하는 편이 더 좋았을 것 같아요.
 
