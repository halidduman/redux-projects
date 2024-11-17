## State Yönetimi

- State:Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling:Bileşenlerin yukarıdan aşağıya veri taşımasıdır.

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişilebilen ve oluşturduğumuz merkezlerden yönettiğimiz state yönetim aracıdır.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken statelerin yönetildiği merkezi state yönetim aracıdır.

## Neden Context Yerine Redux ?

- Kod tekrarını önler
- Performansı daha iyidir
- Bileşenler içerisindeki karışıklığı azaltır
- Haya ayıklama daha kolaydır
- Orta ve büyük ölçekli projelerde state yönetimini daha kolay hale getirir

## Kütüphaneler

- bootstrap
- json-server
- react-redux
- redux
- uuid

## Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer: Aksiyondan aldığı talimata(emir) göre store'da tutulan state'in nasıl değişeceğine karar veren fonksiyondur.

3. Action(Emir & Haber & Talimat): Store'da ki state'i güncellemek için reducera gönderdiğimiz nesnedir.

- - Action iki değerli bir nesne dönderir:
- type(zorunlu): Actionun görevini tanımlayan bir string değerdir.
- payload(opsiyonel): Actionun verisidir.
