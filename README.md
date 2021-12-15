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
* 전체상태, 선택상태를 모듈로 나눠서 구현했는데 계속 진행하다보니깐 설계가 좀 잘못된 것 같다. postit이 여러개가 추가가 되질 않는다. 
* 변화가 일어날때 전체상태와 선택상태 둘다 중복된 부분을 고쳐야하다 보니깐 쓸데없이 모듈을 작성하며 시간을 많이 낭비하고 중복되는 로직이기때문에 코드가 길어져서 가독성이 좋지 않았다.
* 타입스크립트를 이론적으로만 공부했었는데 이번기회에 미니프로젝트에 직접 타입을 다뤄볼수있어서 좋았다. 타입스크립트 에러보는법은 아직도 어렵지만, 하나하나 구글링해서 알아가는 재미가 또 있다.
* 프로젝트때 리덕스 설계를 맡은 기능부분만 해서 전체를 이해하기가 어려웠는데 이번기회에 action객체 만드는법 createAction만드는법 reducer함수만드는법 store에 저장하는법 dispatch함수 만드는법 useSelector를 통한 상태값가져오기 등 다뤄볼 수 있어서 실력향상에 도움이 많이 되었다.
* 시간내에 제출하기 위해 마지막 몇가지 요구사항을 구현하지 못해서 아쉬웠다.
* 예전에 새로고침해도 redux상태값을 저장하려면 redux-persist라는 라이브러리를 이용한다고 자료를 본 적이 있는데 마지막 요구사항은 그 부분을 묻는거 같았는데, 예상외로 타입스크립트 문법을 적응하는데 시간이 오래걸려서 생각만하고 따로 적용하지 못해 아쉬웠다. 
