Tekne Navigator v6
- 506 nokta + Lowrance sembolleri + kalıcı isimler
- Sağ tık düzenleme, silme, yeni nokta ekleme
- Koordinat düzenleme
- Uydu haritası
- GPS, hedef, mesafe, kerteriz
- Windy Point Forecast verisini kendi saatlik tablomuza dönüştürme
- GFS / ICON-EU / GFS Wave seçenekleri
- JSON/KML dışa aktarma
- Yerel kayıt

Windy API key:
Ayarlar > Windy Point Forecast API. Anahtar localStorage'da tutulur.
Windy Point Forecast API'nin Testing anahtarı geliştirme amaçlıdır; üretim kullanımında lisans koşullarını kontrol et.

v7 EKLENTİLER:
- Rüzgâr ekranında Bft birincil gösterim; knot yalnızca küçük yardımcı değer olarak gösterilir.
- Gust da Bft olarak gösterilir.
- Sanal Çapa: GPS konumunu çapa olarak kaydeder, sürüklenme mesafesini ve yönünü gösterir.
- Ayarlanabilir alarm yarıçapı: 5/10/15/20/30/50 m.
- Alarm sınırı aşılırsa görsel uyarı ve cihaz destekliyorsa titreşim.
- Çapa bilgisi localStorage'da saklanır.
- Not: Bu bir GPS geofence/sanal alarmdır; fiziksel sanal çapa motoru veya Minn Kota gibi bir trolling motorunu otomatik yönlendirmez.

v8:
- OpenSeaMap/GEBCO deniz derinlik renk katmanı
- OpenSeaMap derinlik eğrileri
- OpenSeaMap ölçülmüş derinlik katmanı
- Windy API tamamen kaldırıldı; API key istemiyor.
- Hava ekranı ücretsiz Open-Meteo saatlik tahmin verisi kullanıyor.
- Rüzgâr ve gust Bft ana değer olarak gösteriliyor.
- Windy sitesi/iframe/API çağrısı yok.
- Derinlik katmanları genel batimetri/harita amaçlıdır; güvenli seyir için resmi ENC/denizcilik haritası kullanılmalıdır.

v9 DÜZELTME:
Önceki sürümde kullanılan OpenSeaMap WMS katman tanımları güncel servis tanımlarına uymuyordu.
v9'da OpenSeaMap'in güncel dokümantasyonundaki:
- GEBCO 2021: geoserver.openseamap.org/geoserver/gwc/service/wms / gebco2021:gebco_2021
- Depth contours: depth.openseamap.org/cgi-bin/mapserv.fcgi / contour,contour2
- Water depth points: depth.openseamap.org/cgi-bin/mapserv.fcgi / ölçüm katmanları
kullanılıyor.
Harita katmanları internet bağlantısı ister.

v10:
- Sembol + isim üst üste binmesi düzeltildi.
- Lowrance sembolleri için özel HTML marker oluşturuldu.
- İsim sembolün altına yerleştirildi.
- Uzak zoom seviyelerinde isimler otomatik gizleniyor, yakın zoomda tekrar görünüyor.
- Nokta ikonları ve isimleri birbirinden görsel olarak ayrıldı.
- Batimetri katmanları v9'daki haliyle korunuyor; sonraki sürümde EMODnet tabanlı sık izobat sistemi planlanıyor.

v11 GELİŞTİRMELER:
- OpenSeaMap yerine resmi EMODnet Bathymetry WMS kullanıldı.
- EMODnet mean_multicolour ve mean_rainbowcolour batimetri katmanları.
- EMODnet contours derinlik eğrileri.
- Haritada "🌊 Derinlik ölç" modu: tıklanan noktada EMODnet DTM derinlik sorgusu denenir.
- Mevcut 506 waypoint, GPS, sanal çapa, Bft hava ve düzenleme sistemi korunmuştur.
- EMODnet Bathymetry Avrupa denizleri için harmonize DTM ve WMS/WMTS/WFS/WCS servisleri sağlar.

v12:
- Beaufort ölçeği resmi knot aralıklarına göre düzeltildi: 0–12 tamamı görünür.
- Rüzgâr ve gust Bft olarak ana değerdir, knot yardımcı bilgidir.
- EMODnet WMS contours katmanı version 1.3.0 ile yeniden bağlandı.
- Renkli batimetri katmanları da 1.3.0'a geçirildi.
- Not: EMODnet'in genel contours ürünü genelleştirilmiş 50/100/200/500/... m aralıklarını kullanır; bu nedenle 1/2/5/10 m izobat üretmez. Sık izobat için ayrı yüksek çözünürlüklü DTM işleme gerekir.
