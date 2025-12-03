🤖 Giriş

Bu proje, React Native kullanarak tam özellikli bir emlak uygulaması oluşturmayı amaçlar.
Uygulamada Google ile giriş, dinamik mülk listeleri ve kullanıcı profilleri bulunur. Modern araçlarla geliştirilmiştir: Expo SDK, Appwrite, Tailwind CSS ve TypeScript.

⚙️ Teknoloji Stack

Expo: Android, iOS ve web için evrensel mobil uygulama geliştirme platformu.

React Native: Component tabanlı mobil UI geliştirme framework’ü.

Appwrite: Backend servisleri (auth, database, storage, real-time).

TypeScript: Statik tip desteği ve güvenli kod yazma.

TailwindCSS & NativeWind: Hızlı ve tutarlı UI tasarımı için utility-first CSS.

🔋 Özellikler

Google ile Giriş: Güvenli ve hızlı kullanıcı girişi.

Anasayfa: Öne çıkan ve en yeni mülkleri gösterir, arama ve filtreleme.

Keşfet Sayfası: Tüm mülkleri rahatça gezebilme.

Mülk Detay Sayfası: Resimler ve detaylı bilgi.

Profil Sayfası: Kullanıcı ayarları ve profil yönetimi.

Merkezi Veri Çekme: API çağrılarını yönetmek için custom hook.

🤸 Hızlı Başlangıç
Gereksinimler

Git

Node.js

npm

Repository’i Klonla
git clone https://github.com/your-repo/react_native-restate.git
cd react_native-restate

Kurulum
npm install

Ortam Değişkenlerini Ayarla

Proje kök dizininde .env.local dosyası oluştur ve aşağıdakileri ekle:

EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=


Appwrite hesabından kendi değerlerini al.

Uygulamayı Başlat
npx expo start


Android emulator

iOS simulator

Expo Go

Dosyaları app dizininde düzenleyerek geliştirmeye başlayabilirsin. Bu proje file-based routing kullanır.