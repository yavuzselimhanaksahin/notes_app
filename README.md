# notes_app

uygulama not alma ve liste yapma uygulaması

Gerekli yüklemeler
* npm install firebase @angular/fire --save

* npm install @ionic/storage --save


ana sayfada liste için firebase kullanıldı

Notepad için ise ionic storage kullanıldı


Toplam üç sayfa var uygulamada

açılan ilk sayfa  liste yapmak için kullanılıyor

ikinci sayfa not almak için


üçüncü sayfa alınan notların detayları için

uygulamada kullanılan komponentler

* checkbox
* button
* icons
* toggle(uygulamayı dark moda geçirmek için kullanıldı)
* tarih için JavaScript Date () işlevi çağırıldı
* card
* reorder
* routing
* input 
* alert
* content
* list
* toolbar
* item



Notepad için olan sayfalar:


home2 (notların listesi) bu sayfaya ilk sayfadaki NOTPAD butonuna basılarak gidiliyor


Detail (belirli bir notun ayrıntıları)


Yapılan işlevler
* Not oluşturma, silme ve düzenleme
* Bu notları depodan kaydetme ve yükleme bunun için ionic storage kullanıldı
* Notların bir listesini görüntüleme
* Not ayrıntılarını görüntüleme yapıldı





Servis sağlayıcıdan yararlanıldı not oluşturma, güncelleme ve silme mantığının çoğunu işlemekten sorumlu olacak.


ionic g service services/Notes komutu ile servis oluşturuldu.






Routing işlemleri:

notes/:id iki nokta üst üste ile ön eklenmiş yola: id ekleyerek daha sonra yakalayabileceğimiz parametreleri kabul edecek bir yol oluşturdum.


Bu, bir kullanıcı aşağıdaki URL'ye giderse anlamına gelir:


http://localhost:8100/notes


Burdaki id, farklı notların farklı urlleri olması sağlandı. id değerini alabileceğiz. Bu özelliği, daha sonra kullanıcıya uygun notu görüntülemek için kullandım.








Not için interface oluşturuldu notun string,title,content gibi özellikleri var.


Servis oluşturuldu ve görevleri
* Bir not oluşturma ve bunu diziye ekleme
* Bu diziden notları silme
* id'ye göre belirli bir notu bulma ve döndürme
* Not arrayini depoya kaydetme
* Not arrayini depodan yükleme







Ana sayfa genel görünüm

![Screenshot from 2021-01-17 15-36-25](https://user-images.githubusercontent.com/43969712/104844353-e30b0180-58e0-11eb-8560-0a2aa5e1f587.png)

checkbox

![Screenshot from 2021-01-17 15-37-15](https://user-images.githubusercontent.com/43969712/104844355-e43c2e80-58e0-11eb-9c0b-d9c9a861fe91.png)

silme işlemi

![Screenshot from 2021-01-17 15-37-06](https://user-images.githubusercontent.com/43969712/104844363-e605f200-58e0-11eb-8460-4bb6c0baa7e2.png)

reorder işlemi

![Screenshot from 2021-01-17 15-36-58](https://user-images.githubusercontent.com/43969712/104844356-e43c2e80-58e0-11eb-9a99-3647855fc574.png)

liste elemanı ekleme işlemi

![Screenshot from 2021-01-17 15-36-47](https://user-images.githubusercontent.com/43969712/104844357-e4d4c500-58e0-11eb-8247-9c7ee93e103e.png)

elemanın eklenmiş hali

![Screenshot from 2021-01-17 15-36-52](https://user-images.githubusercontent.com/43969712/104844364-e69e8880-58e0-11eb-9cdb-bfa7f1c026d9.png)

Notepad genel görünüm

![Screenshot from 2021-01-17 15-37-45](https://user-images.githubusercontent.com/43969712/104844362-e605f200-58e0-11eb-8dae-cbbaa2123d24.png)

Başlık belirleme

![Screenshot from 2021-01-17 15-42-59](https://user-images.githubusercontent.com/43969712/104844360-e56d5b80-58e0-11eb-9821-f2132c71ffd6.png)

Note detay sayfası(eklenen başlığın içeriğinin yazıldığı yer)

![Screenshot from 2021-01-17 15-43-13](https://user-images.githubusercontent.com/43969712/104844354-e3a39800-58e0-11eb-8fb7-4ddc6f53fdee.png)

Dark mode

![Screenshot from 2021-01-17 15-37-31](https://user-images.githubusercontent.com/43969712/104844361-e56d5b80-58e0-11eb-8a84-3aab33ad9ec8.png)


