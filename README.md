# notes_app

uygulama not alma ve liste yapma uygulaması

Gerekli yüklemeler
* npm install firebase @angular/fire --save

* npm install @ionic/storage --save





Toplam üç sayfa var uygulamada

açılan ilk sayfa  liste yapmak için kullanılıyor
ikinci sayfa not almal için
üçüncü sayfa alınan notların detayları için

uygualmada kullanılan komponentler

* checkbox
* button(büyük add butonuna bir defa basılıp listeye yazı yazıldıktan sonra listenın sırasındaki artı butonuna basılıp yazılan listeye eklenir )
* icons
* toggle(uygulamayı dark moda geçirmek için kullanıldı)
* tarih için JavaScript Date () işlevi çağırıldı
* liste firebase ile bağlantılı
* ion-card liste elemanları için kullanıldı
* liste elemanları aralarında yer değiştirebiliyor (ion-reorder kullanıldı)
* liste elemanları kaydırılarak silinebiliyor (ion-item-sliding)
* Sol yukarıdaki butonlar routing işlevlerini sağlıyor.(Sayfalar arasındaki geçiş)
* input 
* ion-alert kullanıldı
* ion-content
* ion-list
* ion-back-button
* ion-textarea
* ion-title



aşağıdaki işlevler için iki tane daha sayfa oluşturuldu
home2 (notların listesi) bu sayfaya ilk sayfadaki NOTPAD butonuna basılarak gidiliyor
Detail (belirli bir notun ayrıntıları)
Yapılan işlevler
* Not oluşturma, silme ve düzenleme
* Bu notları depodan kaydetme ve yükleme bunun için ionic storage kullanıldı
* Notların bir listesini görüntüleme
* Not ayrıntılarını görüntüleme yapıldı





Servis sağlayıcıdan yararlanıldı not oluşturma, güncelleme ve silme mantığının çoğunu işlemekten sorumlu olacak.


ionic g service services/Notes komutu ile servis oluşturuldu.


Routing işlemleri
notes/:id iki nokta üst üste ile ön eklenmiş yola: id ekleyerek: daha sonra yakalayabileceğimiz parametreleri kabul edecek bir yol oluşturdum.
Bu, bir kullanıcı aşağıdaki URL'ye giderse anlamına gelir:
http://localhost:8100/notes
Burdaki id farklı notların farklı urlleri olması sağlandı. id değerini alabileceğiz. Bu özelliği, daha sonra kullanıcıya uygun notu görüntülemek için kullandım.





Not için interface oluşturuldu notun string,title,content gibi özellikleri var.


Servis oluşturuldu ve görevleri
* Bir not oluşturma ve bunu diziye ekleme
* Bu diziden notları silme
* id'ye göre belirli bir notu bulma ve döndürme
* Not arrayini depoya kaydetme
* Not arrayini depodan yükleme


Not alma için kullanılan komponentler
* Buton
* input
* icon









































