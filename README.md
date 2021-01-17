# notes_app

uygulama not alma ve liste yapma uygulaması

⋅⋅* npm install firebase @angular/fire --save

⋅⋅* npm install @ionic/storage --save

Toplam üç sayfa var uygulamada

açılan ilk sayfa  liste yapmak için kullanılıyor

ilk sayfada kullanılan komponentler

* checkbox
* button(büyük add butonuna bir defa basılıp listeye yazı yazıldıktan sonra listenın sırasındaki artı butonuna basılıp yazılan listeye eklenir )
* icons
* toggle(uygulamayı dark moda geçirmek için kullanıldı)
* tarih için JavaScript Date () işlevi çağırıldı
* liste firebase ile bağlantılı
* ion-card liste elemanları için kullanıldı
* liste elemanları aralarında yer değiştirebiliyor (ion-reorder kullanıldı)
* liste elemanları kaydırılarak silinebiliyor (ion-item-sliding)


aşağıdaki işlevler için iki tane daha sayfa oluşturuldu
home2 (notların listesi) bu sayfaya ilk sayfadaki NOTPAD butonuna basılarak gidiliyor
Detail (belirli bir notun ayrıntıları)
Yapılan işlevler
* Not oluşturma, silme ve düzenleme
* Bu notları depodan kaydetme ve yükleme bunun için ionic storage kullanıldı
* Notların bir listesini görüntüleme
* Not ayrıntılarını görüntüleme yapıldı





ve ayrıca bir  service/provider yararlanıldı not oluşturma, güncelleme ve silme mantığının çoğunu işlemekten sorumlu olacak.


ionic g service services/Notes






