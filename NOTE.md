- Reference
  - https://nextjs.org/docs
  - https://www.youtube.com/watch?v=XIGx1sfvRoc&ab_channel=H%E1%BB%8FiD%C3%A2nIT
  - https://200lab.io/blog/nextjs-la-gi/
  - https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH

- Overview
  - NextJS la fullstack React framework, duoc recommend boi React team
  - NextJS la open source duoc tao ra voi Vercel
  - NextJS cung cap giai phap SSR/CSR voi ReactJS
  - Why
    - React la thu vien (khong phai framework)
      - Uu diem: flexible, to chuc code theo y muon
      - Nhuoc diem: khong thong nhat structure, route, manage state, ...
        -> NextJS ra doi de giai quyet van de tren
  - NextJS chi nen lam FE
    - them BE vao phai tu to chuc code (khong ho tro structure cho BE) -> khoi luong code lon, kho maintain
    - cho phep ket noi toi database -> ko an toan, mat nhieu quyen kiem soat
  - CSR
    - su dung trong truong hop render du lieu dong, dua theo tuong tac cua nguoi dung
    - Uu diem: tang trai nghiem nguoi dung (single page app), it khi can reload lai web, giam tai cho server, viec tinh toan va xu ly UI nam het o client
    - Nhuoc diem: client phai doi trong lan luu cache/load dau tien
  - SSR
    - su dung trong truong hop render du lieu tinh (logo, category, footer, ...)
    - goi request len NextJS -> goi service khac lay data -> render 100% tu server
    - Uu diem:
      - toc do load trang web rat nhanh
      - giau duoc thong tin mat (API Key, secret token, ...)
    - Nhuoc diem:
      - kho toi uu hoa UI tren server, ton thoi gian, kho maintain
      - ton chi phi cau hinh cho server (RAM/CPU)

- Install: npx create-next-app@latest ${PROJECT_NAME}

- Source
  - .next: bien dich toan bo code (typescript) cua du an -> duoc buide lai moi lan start project
  - public: chua static files
  - src: chua source code duoc dong goi
  - tsconfig.json: cau hinh typescript cho du an

- CSS module
  - CSS, SASS, CSS framework (tailwind)
  - CSS in JS (styled component)

- fetch data
  - SWR (Stale While Revalidate)
    - Vercel recommend
    - https://api.github.com/repos/vercel/swr