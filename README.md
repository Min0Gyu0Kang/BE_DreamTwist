# :bug:  꿈틀 DreamTwist
### AI 기반 맞춤형 동화 제작 플랫폼 꿈틀
세상에 하나뿐인 동화, 꿈틀에서 마음껏 즐겨보세요!

<img width="700" height="400" src="https://github.com/user-attachments/assets/60565221-fa84-420f-a0e3-a62d46d9e8fd">

<br/>
<br/>

## :bulb: 프로젝트 소개
- 동화는 아이들의 창의성과 상상력을 키우는 데 중요한 역할을 한다.<br/>
최근 디지털 시대에 맞춰 온라인 도서 플랫폼의 수요가 증가하면서 다양한 디지털 도서와 동화 콘텐츠가 제공되고 있다.

- 그러나 기존 동화를 단순히 디지털화하는 것보다 사용자 참여형 동화 창작 플랫폼이 더 효과적이라는 결론을 내렸다.<br/>
이는 아이들과 성인 모두에게 창의적 표현의 기회를 제공하고, 협업을 통한 학습 효과를 높일 수 있기 때문이다.

- 특히, 동화 창작의 질을 높이기 위해 AI 기술의 활용에 주목하였고, AI와 인간의 협업을 통한 동화 창작이 중요하다고 판단하였다.<br/>
이를 위해 AI 스토리 생성, 이미지 생성 기능이 필요하다고 생각한다.

- 이에 AI 기반 맞춤형 동화 생성 플랫폼인 ‘꿈틀’을 통해 AI 동화 창작 서비스를 제공하여,<br/>
최종적으로 창의적 동화 창작 문화를 조성하고 디지털 시대의 새로운 문학 경험을 제공하고자 한다.
<br/>

## :busts_in_silhouette: 팀원
| 이름 | 개발 파트 | 담당 기능 |
| :-------: | :-------: | :-------------- |
| 박수정 | 팀장 / 백엔드 | - 동화 스토리 직접 생성<br/> - 금지어 크롤링 및 설정<br/> - 동화 및 프로필 이미지 업로드<br/> - 구글 소셜 로그인 및 회원 기능|
| 강민규 | 백엔드 | - 동화 스토리 조회, 수정, 삭제<br/> - 동화 좋아요, 조회수<br/> - 동화 검색 기능 |
| 원경혜 | 백엔드, AI | - AI 동화 줄거리 생성 모델 학습 및 api 작성<br/> - AI 동화 이미지 생성<br/> - AI 동화 줄거리 생성을 위한 프롬프트 번역<br/> - AI 이미지 생성 api 연동<br/> - 동화책 댓글 생성, 조회, 수정, 삭제 |
| 이유민 | 백엔드, AI | - AI 동화 줄거리 생성 모델 학습 및 api 작성<br/> - AI 동화 줄거리 기반 주제 및 제목 생성<br/> - 동화 생성 AI api 연동<br/> - 동화 생성을 위한 결제 및 포인트 기능<br/> - 백엔드, AI 배포 |
| 임도헌 | 프론트엔드 | - 동화 생성 기능(줄거리, 이미지 파일첨부, 그림판, AI 이미지)<br/> - 동화 편집 기능<br/> - 그림판 기능<br/> - 프론트엔드 배포 |
| 나경윤 | 프론트엔드 | - 동화 검색<br/> - 동화 게시판 및 동화 삭제<br/> - 회원 기능 및 마이페이지<br/> - 동화책 댓글 생성, 조회, 수정, 삭제 |
| 김민규 | 프론트엔드 | - AI 동화 및 직접 생성 페이지<br/> - 동화 생성을 위한 결제 및 포인트 기능 |

<br/>

## :wrench: 개발 환경
- 기술 스택<br/>
<div>
<table>
  <tr>
    <td>프론트엔드</td>
    <td> 
        <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
        <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>백엔드</td>
    <td>
        <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
        <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white"/>
        <img src="https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=TypeORM&logoColor=white"/>
        <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/>
        <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
        <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=white"/>
        <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>
        <img src="https://img.shields.io/badge/WebPack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>AI</td>
    <td>
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white" />
        <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=PyTorch&logoColor=white" />
        <img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=Flask&logoColor=white" />
        <img src="https://img.shields.io/badge/Hugging Face-FFD21E?style=flat" />
        <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=OpenAI&logoColor=white" />
        <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>DB</td>
    <td>
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
        <img src="https://img.shields.io/badge/AWS RDS-527FFF?style=flat&logo=amazonrds&logoColor=white" />
        <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=amazons3&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>배포</td>
    <td> 
        <img src="https://img.shields.io/badge/AWS EC2-FF9900?style=flat&logo=amazonec2&logoColor=white" /> 
        <img src="https://img.shields.io/badge/NGINX-009639?style=flat&logo=nginx&logoColor=white" /> 
        <img src="https://img.shields.io/badge/PM2-2B037A?style=flat&logo=pm2&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>협업</td>
    <td> 
        <img src="https://img.shields.io/badge/Notion-FFFFFF?style=flat&logo=notion&logoColor=black" /> 
        <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white" />
        <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" /> 
        <img src="https://img.shields.io/badge/Miro-050038?style=flat&logo=miro&logoColor=white" /> 
        <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=flat&logo=gitlab&logoColor=white" />
    </td>
  </tr>
</table>

- 버전 관리 : [GitLab](https://kdt-gitlab.elice.io/ai_track/class_10/ai_project/team01)

- 협업 툴 : Discord, [Notion](https://unique-beat-d53.notion.site/Dream-Twist-820c069e91f64940978252e556a03ecb?pvs=4)

- 디자인 : [Figma](https://www.figma.com/design/EKyJtBhALfgNG5ER5EZ06U/%EA%BF%88%ED%8B%80?node-id=0-1&t=Nob2cdvjKU1JJUqJ-1)<br/>

&nbsp;<img src="https://github.com/user-attachments/assets/9ace95f0-695c-42d1-bd4e-bd9d84f9a36e" width="600" height="370">

- ERD<br/>

&nbsp;<img src="https://github.com/user-attachments/assets/a718a4bc-a265-435f-9d13-ebf541e35a45" width="600" height="400">

- API : Swagger <br/>

&nbsp;<img src="https://github.com/user-attachments/assets/188cde46-f887-47dc-a0d6-7f5ac096a498" width="380" height="800">
</div>

## :file_folder: 프로젝트 폴더 구조

<details>
  <summary> AI</summary>
  
```
📦 ai_dreamtwist
 ┣ 📂 data
 ┃ ┣ 📂 row
 ┃ ┃ ┗ 📜 train_data.txt
 ┃ ┗ 📂 processed
 ┣ 📂 models
 ┃ ┣ 📂 story_generator
 ┃ ┃ ┣ 📜 config.json
 ┃ ┃ ┣ 📜 generation_config.json
 ┃ ┃ ┣ 📜 model.safetensors
 ┃ ┃ ┣ 📜 special_tokens_map.json
 ┃ ┃ ┣ 📜 tokenizer_config.json
 ┃ ┃ ┗ 📜 tokenizer.json
 ┃ ┗ 📂 py_hanspell   
 ┣ 📂 notebooks
 ┃ ┃ ┣ 📜 total_code.ipynb
 ┃ ┃ ┗ 📜 story_generator.ipynb
 ┣ 📂 src
 ┃ ┣ 📂 data
 ┃ ┃ ┣ 📜 __init__.py
 ┃ ┃ ┗ 📜 preprocessing.py
 ┃ ┣ 📂 features
 ┃ ┃ ┣ 📜 __init__.py
 ┃ ┃ ┗ 📜 dataset_setup.py
 ┃ ┣ 📂 model
 ┃ ┃ ┣ 📜 __init__.py
 ┃ ┃ ┣ 📜 story_train.py
 ┃ ┃ ┗ 📜 story_generator.py
 ┃ ┗ 📂 utils
 ┣ 📂 app
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┗ 📂 templates
 ┣ 📜 app.py
 ┣ 📜 .env
 ┣ 📜 requirements.txt 
 ┣ 📜 .gitattributes
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```
</details>

<details>
  <summary> FE</summary>
  
```
📦 fe_dreamtwist
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 board
 ┃ ┃ ┃ ┣ 📂 [id]
 ┃ ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┣ 📂 pay
 ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┣ 📜 layout.tsx
 ┃ ┃ ┗ 📜 not-found.tsx
 ┃ ┣ 📂 api
 ┃ ┃ ┣ 📜 AuthApi.ts
 ┃ ┃ ┣ 📜 BookApi.ts
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┗ 📂 auth
 ┃ ┃ ┃ ┃ ┗ 📜 EditProfileList.tsx
 ┃ ┃ ┃ ┗ 📂 edit
 ┃ ┃ ┃ ┃ ┗ 📜 FairytailForm.tsx
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┃ ┗ 📜 useAiImage.ts
 ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┗ 📜 globals.css
 ┃ ┃ ┣ 📂 utils
 ┃ ┃ ┃ ┗ 📜 localStorage.tsnot-found.tsx
 ┣ 📂 public
 ┃ ┃ ┃ ┣ 📂 fonts
 ┃ ┃ ┃ ┗ 📂 images
 ┣ 📜 next.config.mjs
 ┣ 📜 tailwind.config.ts
 ┣ 📜 tsconfig.json
 ┣ 📜 .eslintrc.json
 ┣ 📜 .prettierrc
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```
</details>

<details>
  <summary> BE</summary>
  
```
📦 be_dreamtwist
 ┣ 📂 src
 ┃ ┣ 📂 modules
 ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┣ 📜 auth.controller.ts
 ┃ ┃ ┃ ┣ 📜 auth.service.ts
 ┃ ┃ ┃ ┣ 📜 auth.module.ts
 ┃ ┃ ┃ ┣ 📜 auth.entity.ts
 ┃ ┃ ┃ ┣ 📜 auth.repository.ts
 ┃ ┃ ┃ ┗ 📂 dto
 ┃ ┃ ┣ 📂 user
 ┃ ┃ ┃ ┗ 📜 ...
 ┃ ┃ ┃ ┗ 📂 dto
 ┃ ┃ ┣ 📜 app.module.ts
 ┃ ┃ ┣ 📜 app.controller.ts
 ┃ ┃ ┣ 📜 app.service.ts
 ┃ ┃ ┗ 📜 main.ts
 ┣ 📂 test
 ┣ 📂 shared
 ┃ ┣ 📂 entities
 ┃ ┣ 📂 filters
 ┃ ┣ 📂 guards
 ┃ ┣ 📂 interceptors
 ┃ ┣ 📂 pipes
 ┃ ┣ 📂 types
 ┃ ┗ 📂 utils
 ┣ 📜 .env 
 ┣ 📜 nest-cli.json
 ┣ 📜 tsconfig.json
 ┣ 📜 tsconfig.build.json
 ┣ 📜 .eslintrc.json
 ┗ 📜 .prettierrc
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 README.md
```
</details>

<br/>

## :star: 페이지별 기능

### 메인페이지
- 베스트 동화 및 작가
- 태그, 제목별 검색
- 최신순 / 인기순 / 조회순 정렬

|명예의 전당|무한 스크롤|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/5e504c0a-11c5-4347-a5cb-4f9d74819353">|<img width="400" height="220" src="https://github.com/user-attachments/assets/f6c931b1-25ba-421e-9b08-c9dfb1726412">|
|**태그 검색**|**정렬 / 제목 검색**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/f88b4905-ec61-49f7-a427-18bf385cb11b">|<img width="400" height="220" src="https://github.com/user-attachments/assets/77fc0ab7-ae01-4f06-ad0d-a191d6486c36">|

### 로그인 / 회원가입
- 소셜 로그인 (구글)
- 로그인 후 닉네임 + 프로필 이미지
  - 프로필 이미지 클릭 시 마이페이지 / 로그아웃 버튼
  
|로그인 / 회원가입|로그인 후 네비바|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/75f5ec2f-d24c-40cb-8ce9-879bc2764b05">|<img width="400" height="220" src="https://github.com/user-attachments/assets/93c931af-2683-4132-994a-34fcba403f25">|

### 동화 만들기
- 동화 직접 쓰기 - 제목 / 테마 / 줄거리
- AI 동화 생성
  - 제목 / 테마 / 줄거리 생성
  - 편집
- 이미지 삽입
  - AI 이미지 생성
  - 그림판 기능
  - 이미지 파일 첨부

|직접 쓰기 / AI 사용|직접 쓰기|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/25ab2924-3b2e-4a5b-9477-3cb7fb84cf01">|<img width="400" height="220" src="https://github.com/user-attachments/assets/1211857d-dfd1-4020-b591-c1c6775599fd">|
|**AI 줄거리 생성**|**AI 줄거리 생성 - 편집**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/275af5b0-e458-460c-b592-3c9996e81ce7">|<img width="400" height="220" src="https://github.com/user-attachments/assets/f45ac616-06eb-4be8-a20b-de2a40d7add1">|
|**이미지 삽입 - AI 이미지 생성**|**이미지 삽입 - 그림판 기능**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/22f5b54d-0eed-46c2-89de-8ed2c0e8756f">|<img width="400" height="220" src="https://github.com/user-attachments/assets/aece2818-724f-42d1-971a-c8fffa41b288">|
|**이미지 삽입 - 사진 첨부**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/bc09c5b3-4b9d-403c-86e2-0f124e088578">|

### 동화 게시판
- 동화 보기
  - 조회수 / 좋아요 기능
  - 내가 쓴 동화 - 수정 / 삭제 기능
  - 스크롤 뷰와 상호작용
- 댓글
  - 작성 / 수정 / 삭제
  - 페이지네이션

|동화 보기|댓글 작성|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/58fea868-640c-42f4-91f9-7c6ce2c7ccb2">|<img width="400" height="220" src="https://github.com/user-attachments/assets/8efb05f4-4018-4434-a8d6-af1bfd43637a">|

### 결제페이지
- 꿈틀 포인트 충전
  - 포인트별 결제
  - toss payments 이용
  - 환불 사유 입력 및 환불 요청

|포인트 충전|toss payments 결제|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/1ed6c2cb-bbc6-46be-a24b-d2f18658e1a1">|<img width="400" height="220" src="https://github.com/user-attachments/assets/0f33a2fe-1539-4d47-be70-ee07d7065f3a">|
|**결제 완료**|**환불 요청**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/a379fa60-50cf-47de-9597-fc4e65881aff">|<img width="400" height="220" src="https://github.com/user-attachments/assets/9f9add38-8568-49b0-bbfe-7dcb3baa0fca">|

### 마이페이지
- 내 동화 개수, 받은 좋아요 개수, 포인트 조회
- 내 동화, 좋아요한 동화, 내가 쓴 댓글, 결제 내역 조회
- 프로필 수정
  - 프로필 이미지, 닉네임 수정
- 회원 탈퇴

|마이페이지|프로필 수정|
|:----:|:----:|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/6350f2cf-07e7-4360-ad50-003c00d93464">|<img width="400" height="220" src="https://github.com/user-attachments/assets/bcad1f3c-eea4-42ef-b58e-eff764ff1727">|
|**회원 탈퇴**|
|<img width="400" height="220" src="https://github.com/user-attachments/assets/9d919562-0a21-419b-a58e-c27206e60bbb">|
