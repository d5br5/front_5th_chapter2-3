## 과제 체크포인트

### 배포 링크
- https://d5br5.github.io/front_5th_chapter2-3

### 기본과제

#### 목표 : 전역상태관리를 이용한 적절한 분리와 계층에 대한 이해를 통한 FSD 폴더 구조 적용하기
- 전역상태관리를 사용해서 상태를 분리하고 관리하는 방법에 대한 이해
- Context API, Jotai, Zustand 등 상태관리 라이브러리 사용하기
- FSD(Feature-Sliced Design)에 대한 이해
- FSD를 통한 관심사의 분리에 대한 이해
- 단일책임과 역할이란 무엇인가?
- 관심사를 하나만 가지고 있는가?
- 어디에 무엇을 넣어야 하는가?

#### 체크포인트
- [x] 전역상태관리를 사용해서 상태를 분리하고 관리했나요?
- [x] Props Drilling을 최소화했나요?
- [x] shared 공통 컴포넌트를 분리했나요?
- [x] shared 공통 로직을 분리했나요?
- [x] entities를 중심으로 type을 정의하고 model을 분리했나요?
- [x] entities를 중심으로 ui를 분리했나요?
- [x] entities를 중심으로 api를 분리했나요?
- [x] feature를 중심으로 사용자행동(이벤트 처리)를 분리했나요?
- [x] feature를 중심으로 ui를 분리했나요?
- [x] feature를 중심으로 api를 분리했나요?
- [x] widget을 중심으로 데이터를 재사용가능한 형태로 분리했나요?


### 심화과제

#### 목표: 서버상태관리 도구인 TanstackQuery를 이용하여 비동기코드를 선언적인 함수형 프로그래밍으로 작성하기 

- TanstackQuery의 사용법에 대한 이해
- TanstackQuery를 이용한 비동기 코드 작성에 대한 이해
- 비동기 코드를 선언적인 함수형 프로그래밍으로 작성하는 방법에 대한 이해

#### 체크포인트

- [x] 모든 API 호출이 TanStack Query의 useQuery와 useMutation으로 대체되었는가?
- [x] 쿼리 키가 적절히 설정되었는가?
- [x] fetch와 useState가 아닌 선언적인 함수형 프로그래밍이 적절히 적용되었는가?
- [x] 캐싱과 리프레시 전략이 올바르게 구현되었는가?


## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->

빠르게 과제를 완료할 수 있을거라 생각했는데, 생각보다 시간이 너무 많이 소요되었습니다. 과제전형 응시 + 회사 업무 바빠짐 이슈로 수요일에 과제를 시작했는데,, ㅜㅜ 일찍 시작했으면 좀 더 완성도를 높일 수 있지 않았을까 하는 아쉬움이 남습니다. 

그래도 이제 FSD가 뭔지 어느정도는 알게 된 것 같아 좋습니다. (근데 이게 저에게 딱 맞는 구조는 아닌 것 같아서 앞으로 자주 사용할지는 모르겠습니다.)

과제 설명을 보고, 기본 심화를 구분하지 말고 처음부터 RQ + zustand를 적용해서 분리해보자! 는 마인드로 시작했습니다.
과정이 쉽지는 않았지만, 나눠서 진행했으면 더 오래걸렸을 것 같네요. 그래도 잘 마무리해서 좋습니다.

### 과제에서 좋았던 부분

- 정리되지 않은 코드의 구조를 파악하고, 분리하는 과정을 겪을 수 있어 좋았습니다. 추후 다른 팀으로 합류하여 새로운 코드를 접하게 되더라도, 구조를 어찌저찌 잘 파악해나갈 수 있겠다는 자신감을 얻었습니다.
- props drilling을 최소화하고, zustand store를 사용하여 전역 상태관리를 경험할 수 있어 좋았습니다.
- react-query를 사용해, 서버 데이터와 클라이언트 상태를 구분해볼 수 있어 좋았습니다. 

### 과제를 하면서 새롭게 알게된 점

- react-query를 많이 사용해보지 못했는데, 이제 구조와 사용 방법에 대해 좀 알게된 것 같습니다. 
- FSD에 대해 잘 몰랐는데, 이제 좀 알게된 것 같습니다.

### 과제를 진행하면서 아직 애매하게 잘 모르겠다 하는 점, 혹은 뭔가 잘 안되서 아쉬운 것들

- FSD가 무엇인지 이제야 조금 알게된 느낌인데, 아직 능숙하게 다루지는 못하는 것 같습니다. 

## 리뷰 받고 싶은 내용이나 궁금한 것에 대한 질문

고민을 오래 했는데, 명쾌하게 정리하지 못한 부분 질문드립니다.

1. 같은 레이어 계층을 import해서 사용하면 안되는건가요? 안된다고 배우긴 했지만, 가끔 괜찮다는 자료도 본 것 같아서요. 실제로 GPT도 괜찮다고 대답해주고.. 잘 개발하고 있다가 동일 레이어 import가 발생하면 둘 중 하나를 위 레이어로 옮기는 작업을 매번 수행해주는 것도 은근히 불편한 것 같습니다. 구체적인 예시는 들지 못하겠지만, 동일 레이어 import를 막으면 entity, feature, widget 말고 한 단계가 더 있어야 할 것 같은 느낌도 가끔 받습니다 (process는 적합하지 않고..) . 일관적으로 사용하기만 한다면, 동일 레이어 import를 일부 허용해도 괜찮을까요?

2.. post를 조회하는 로직이 비슷한 종류로 3가지 있었습니다. 일반 게시물 조회 / 태그별 게시물 조회 / 게시물 검색. 이들은 각각 응답 구조가 같고, 모두 user 데이터랑 결합해서 사용했습니다. 그래서 저는 다음과 같이 세 타입의 쿼리를 묶은 새로운 쿼리를 만들었습니다. 

```tsx
export const usePosts = () => {
  const { data: normalPosts, isLoading: normalPostsLoading } = useNormalPosts()
  const { data: tagPosts, isLoading: tagPostsLoading } = useTagPosts()
  const { data: searchPosts, isLoading: searchPostsLoading } = useSearchPosts()

  const posts = useMemo(() => {
    if (searchPosts) {
      return searchPosts
    }
    if (tagPosts) {
      return tagPosts
    }
    if (normalPosts) {
      return normalPosts
    }
  }, [normalPosts, tagPosts, searchPosts])

  const isLoading = normalPostsLoading || tagPostsLoading || searchPostsLoading

  return { data: posts, isLoading }
}
```

user랑 결합하는 로직에서는 post 데이터가 어떤 종류의 post인지 신경쓰지 않으므로, 이렇게 묶어서 은닉화하고자 하는 의도도 있었습니다. 
제가 궁금한건, 1. 이렇게 훅을 결합해서 사용하기도 하는가. 2. 결합된 이 훅은 어느 레이어에 배치해야 하는가 입니다.
일단 사용해도 괜찮다는 가정하에, entity layer는 아닌 것 같고, feature에 배치해야 하나? 그렇다면 이 훅은 widget 이상에서만 사용할 수 있나..? 이런 생각이 들어서요. (1번 질문과 어느정도 이어집니다.. ㅎㅎ) 이 훅에 대한 코치님의 의견이 궁금합니다. (나라면 이렇게 훅을 구성했을 것 같다. 어느 레이어에 배치했을 것 같다. 혹은 이렇게 만들지 않았을 것 같다) 

3. post 데이터와 user 데이터를 결합하는 로직은 헬퍼 함수로 만드는 것으로 충분할까요? 아니면 묶는 로직까지 포함해서 상위 훅으로 만드는게 좋을까요..?

4. queryClient 캐시 무효화/자체 수정 관련 질문입니다. 댓글 삭제/게시물 수정 등 mutation 로직을 수행할 때, 결과 업데이트 하는 방식에는 두 가지가 있다고 생각합니다. 1. 관련 쿼리를 invalidate해서, 그 데이터를 사용하는 컴포넌트에서 refetch 수행 / 2. queryClient cache에 저장된 값을 모두 순회하며, 직접 업데이트
1번 방식은, 코드 작성하는 입장에서 (세부 업데이트 로직을 생각하지 않아도 된다는 점에서)편하다는 장점이 있지만, 추가적으로 API 호출이 발생합니다. 2번 방식은, API 호출은 막지만, 세부 업데이트 로직을 생각해야 해서 번거로운 면이 있습니다. 서비스가 커지면 업데이트 로직이 거대해지기도 합니다. 

코치님은 어떤 방식을 더 선호하시나요? 혹은 어떤 방식이 더 옳다고 생각하시나요?


감사합니다. 연휴 잘 보내세요 :)

### 코치님 피드백

도형님 고생하셨습니다! 고민의 흔적이 보이는 과제네요.
전반적으로 FSD 규칙에 잘 맞춰 작성해주신 것 같습니다. 

다만, api 호출 부는 entity에 tanstack query를 사용하는 부분은 실제 엔티티를 다루는것보다 훨씬 더 많은 함수, 기능을 다루고 있기에 더 위 레이어에서 다뤘으면 좋지 않았을까 싶네요. (순수하게 엔티티라고 보기에는 조~금 아쉬울 수 있지 않나 라는 개인적인 의견이 있습니다 ㅎㅎ)

추가로 index를 export 해야 하는 메서드만 공개하도록 해 내부에서 사용하는 메서드들을 공개하지 않아 캡슐화나 응집도를 높이려고 했던 걸로 알고 있어요. 그래서 저 같은 경우는 길어지더라도 파일을 나누고 export하고자 하는 메서드만 내보내는 편입니다!

질문 답변 드려보고 마무리해볼게요!

> 동일 레이어 간 import에 관한 질문

넵! 무슨 말씀인지는 이해하지만, 그게 이 구조에서 의도한것일수도 있을 것 같아요 ㅎㅎ 그리고 말씀해주신 내용 처럼 점점 끌어올려지다가 page가 비대해지는 문제도 종종 있구요. 
그럼에도 린트룰을 보면 참조가 가능하도록 열려있는 경우가 있는데요.
하지만 개인적으로 프로젝트를 크게 운영해본 경험에 있어서는 대부분이 분리가 적절했고 합치는게 필요한가 싶을때까 있긴했어요 ㅎㅎ 
그래도 종종 그런 경우가 발생할때는 명확하게 왜 예외처리를 했는지 명시하고 작업을 진행하고는 했습니다.
지금은 의존의 방향이 명확하게 정해져있기 때문에 순환 참조가 발생하지 않게 늘 조심해야 할 것 같아요! 

> 훅 결합과 레이어 배치

충분히 합리적인 접근인 것 같아요 ㅎㅎ 로직들을 한 군데 모으고 단순하게 post에 대해 처리하고자 하려고 했던건데요. 많이 사용하는 방식인 것 같아요. 

하지만, 저라면 어떻게 했을 것 같냐 라고 하셨으니 (제가 잘못 이해했을수도 있지만) search, normal, tag가 post라는 공통점 외에 사용되는 화면에 따라 달라지고 쓸 수 있는 post가 다르다고 하면 합치는게 의미가 크게 없을 것 같아요.  변경이 결국에는 상황에 따라 각각 이뤄져야 하고, 이 훅에서는 해당 정보가 드러나지 않다보니 수정 범위에 대해 이해하기 어려울 것 같기도 하구요! 스펙이 약간만 변해도 해당 훅 자체가 너무 복잡해질 가능성이 크기도 하구요 ㅎㅎ 하지만 지금은 그런 상황은 아니니까 나쁘지 않은 접근인 것 같아요.

이 경우 post에 대해 읽는 훅들이 모여있으니 feature나 더 상위 page쪽에 묶여야 하는 훅이지 않을까 싶네요 ㅎㅎ

> post 데이터와 user 데이터를 결합하는 로직은 헬퍼 함수로 만드는 것으로 충분할까요? 아니면 묶는 로직까지 포함해서 상위 훅으로 만드는게 좋을까요..?

캐싱이나 메모이제이션 관점도 있을 것 같고, 캡슐화를 누리고 싶다면 훅으로 분리하는게 좋을 것 같고 그런 목적이 아니라 단순한 로직이라면 헬퍼 함수로도 나쁘지 않을 것 같네요!

> queryClient 캐시 무효화/자체 수정 관련 질문

아마 낙관적 업데이트를 얘기하는 거겠죠? ㅎㅎ
탠스텍에서도 아마 해당 기능을 편하게 사용할 수 있도록 기능을 제공할텐데 그걸 사용하는게 가장 이상적일 것 같구요.

invalidate방식은 가장 구현이 단순하고 항상 최신 데이터를 보장한다는 장점이 있는 반면에 네트워크 요청이 추가적으로 발생한다는 단점이 있고, 직접 업데이트를 하면 즉각적인 UI 업데이트로 사용성이 좋아지겠지만 데이터 무결성을 보장하기가 참 어렵겠죠. 
기획적으로 어떻게 나타내는게 좋은지 검토해보고 각각 방법을 선택하면 좋을것 같은데요. 예를 들어서 유튜브 좋아요 같은 경우는 예전에는 좋아요 버튼을 누르면 실제로 업데이트가 된 것처럼 보였지만 네트워크 요청이 가고 실제 데이터가 반영되는데는 시간 텀이 있듯이 각 화면 상황에 맞게 적절한 방법을 선택하면 될 것 같아요 ㅎㅎ 둘다 좋은 방법이고 고민해서 상황에 맞게 선택하면 될 것 같아요.

고생하셨고 다음 주 과제도 화이팅입니다!!
