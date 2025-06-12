import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Brain,
  Target,
  Users,
  BookOpen,
  Zap,
  TrendingUp,
  MessageCircle,
  Calendar,
  Award,
  Atom,
  Calculator,
  FlaskConical,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">OlympicPrep</span>
              <div className="text-xs text-gray-500">AI-Powered Training</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Özellikler
            </Link>
            <Link href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
              Faydalar
            </Link>
            <Link href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">
              Demo
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-amber-500 to-orange-600">Uygulamayı Dene</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            🏆 Eylül 2024'te Sunulacak
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Olimpiyat Hazırlığında
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Yapay Zeka Devrimi
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Matematik, Kimya ve Fizik olimpiyatlarına hazırlanan öğrenciler için AI destekli, kişiselleştirilmiş eğitim
            platformu. Günlük streak sistemi ve akıllı soru analizi ile başarıya ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-amber-500 to-orange-600">
              Projeyi İncele
              <Trophy className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Demo İzle
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">3</div>
              <div className="text-gray-600">Olimpiyat Dalı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">AI</div>
              <div className="text-gray-600">Destekli Değerlendirme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">24/7</div>
              <div className="text-gray-600">Kişisel Mentor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proje Nedir?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OlympicPrep, olimpiyat matematik, kimya ve fizik sorularını AI ile analiz eden, öğrencilerin seviyesine
              göre kişiselleştirilmiş sorular üreten ve çözüm sürecinde rehberlik eden yenilikçi bir eğitim
              platformudur.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nasıl Çalışır?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Giriş ve Profil</h4>
                    <p className="text-gray-600">Kullanıcılar giriş yaparak kişisel streak sayaçlarını takip eder</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Kategori Seçimi</h4>
                    <p className="text-gray-600">Matematik, Kimya veya Fizik dalından soru seçimi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">AI Değerlendirme</h4>
                    <p className="text-gray-600">Gemini API ile cevaplar anında kontrol edilir</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Akıllı Rehberlik</h4>
                    <p className="text-gray-600">Yanlış cevaplarda adım adım çözüm ve soru-cevap desteği</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card className="text-center p-4">
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Matematik</div>
                </Card>
                <Card className="text-center p-4">
                  <FlaskConical className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Kimya</div>
                </Card>
                <Card className="text-center p-4">
                  <Atom className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Fizik</div>
                </Card>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Günlük Streak</span>
                  <Badge variant="secondary">🔥 7 gün</Badge>
                </div>
                <div className="text-xs text-gray-500">AI Mentor aktif...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals and Benefits */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proje Hedefleri ve Faydaları</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Öğrenciler ve öğretmenler için tasarlanmış kapsamlı faydalar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Benefits */}
            <Card className="p-8 border-0 shadow-xl">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Öğrenciler İçin Faydalar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Kişiselleştirilmiş Öğrenme</h4>
                    <p className="text-gray-600 text-sm">Seviyeye uygun sorular ve bireysel ilerleme takibi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Motivasyon Artışı</h4>
                    <p className="text-gray-600 text-sm">Günlük streak sistemi ile sürekli motivasyon</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Anında Geri Bildirim</h4>
                    <p className="text-gray-600 text-sm">AI mentor ile 7/24 soru-cevap desteği</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Derin Öğrenme</h4>
                    <p className="text-gray-600 text-sm">Adım adım çözüm açıklamaları ile kavramsal anlayış</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teacher Benefits */}
            <Card className="p-8 border-0 shadow-xl">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Öğretmenler İçin Faydalar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Otomatik Değerlendirme</h4>
                    <p className="text-gray-600 text-sm">AI ile anında soru kontrolü ve zaman tasarrufu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">İlerleme Takibi</h4>
                    <p className="text-gray-600 text-sm">Öğrenci performansının detaylı analizi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Kaliteli Soru Bankası</h4>
                    <p className="text-gray-600 text-sm">AI ile optimize edilmiş olimpiyat seviyesi sorular</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Sınıf Yönetimi</h4>
                    <p className="text-gray-600 text-sm">Toplu öğrenci takibi ve raporlama</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teknik Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern teknolojiler ile güçlendirilmiş platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>AI Soru Analizi</CardTitle>
                <CardDescription>
                  Docker containerization ile kategorize edilmiş soru analizi ve değerlendirme sistemi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Gemini API Entegrasyonu</CardTitle>
                <CardDescription>
                  Google Gemini AI ile güçlü cevap kontrolü ve adım adım çözüm açıklamaları
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Veri Pipeline</CardTitle>
                <CardDescription>
                  Stabil veri akışı ile her sorunun aynı değerlendirme sürecinden geçmesi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Kategorik Sınıflandırma</CardTitle>
                <CardDescription>
                  Sayı teorisi, geometri, kombinatorik gibi konulara göre otomatik sınıflandırma
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Interaktif Chat</CardTitle>
                <CardDescription>Yanlış cevaplarda açılan chat paneli ile öğrenci-AI etkileşimi</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Streak Sistemi</CardTitle>
                <CardDescription>
                  Günlük doğru cevap streaki ile öğrenci motivasyonunu artıran gamification
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proje Takvimi</h2>
            <p className="text-xl text-gray-600">Yaz sonuna kadar tamamlanacak ve Eylül'de sunulacak</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-200"></div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Model Seçimi ve Entegrasyon</h3>
                    <p className="text-gray-600">Hugging Face'den uygun model seçimi ve API entegrasyonu</p>
                    <Badge variant="outline" className="mt-2">
                      Temmuz
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Veri Pipeline ve Containerization</h3>
                    <p className="text-gray-600">Docker ile soru kategorilendirme ve veri akış sistemi</p>
                    <Badge variant="outline" className="mt-2">
                      Ağustos
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Frontend ve Backend Geliştirme</h3>
                    <p className="text-gray-600">Kullanıcı arayüzü ve API geliştirme süreci</p>
                    <Badge variant="outline" className="mt-2">
                      Ağustos
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sunum ve Demo</h3>
                    <p className="text-gray-600">Projenin tamamlanması ve final sunumu</p>
                    <Badge className="mt-2 bg-green-500">Eylül 2024</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Olimpiyat Başarısının Geleceği Burada</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            AI destekli eğitim platformu ile olimpiyat hazırlığında yeni bir dönem başlıyor. Projeyi yakından takip edin
            ve gelişmeleri kaçırmayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Demo Talep Et
              <Trophy className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-amber-600"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">OlympicPrep</span>
                  <div className="text-xs text-gray-400">AI-Powered Training</div>
                </div>
              </div>
              <p className="text-gray-400">Olimpiyat hazırlığında AI teknolojisi ile yeni nesil eğitim platformu.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Proje</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Özellikler</li>
                <li>Teknik Detaylar</li>
                <li>Roadmap</li>
                <li>Demo</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kategoriler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Matematik</li>
                <li>Fizik</li>
                <li>Kimya</li>
                <li>Olimpiyat Soruları</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Proje Ekibi</li>
                <li>Sunum Talebi</li>
                <li>Geri Bildirim</li>
                <li>Destek</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OlympicPrep. Eylül 2024'te sunulacak proje.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
