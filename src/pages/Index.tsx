import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="ChefHat" className="text-orange-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Домашний Вкус</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">О нас</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">Меню</a>
              <a href="#delivery" className="text-gray-700 hover:text-orange-600 transition-colors">Доставка</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Отзывы</a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                🏠 Домашняя кухня
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Настоящие домашние блюда от 
                <span className="text-orange-600 block">местных поваров</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Готовим с любовью, как дома. Каждое блюдо — это история, традиция и забота о вашем здоровье.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Icon name="Utensils" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>
                <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl p-8 shadow-xl">
                <img 
                  src="/img/2fa03f32-98fa-4f87-9c1b-50e08f4c3468.jpg" 
                  alt="Домашние блюда" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Icon name="Heart" className="text-red-500" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              О нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы объединяем талантливых домашних поваров с теми, кто ценит настоящий вкус
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-xl">Местные повара</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Наши повара — это ваши соседи, которые готовят с душой и передают семейные рецепты
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-xl">Свежие продукты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Используем только свежие, качественные продукты от проверенных поставщиков
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-xl">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Доставляем горячие блюда в течение 30-60 минут после приготовления
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные блюда
            </h2>
            <p className="text-xl text-gray-600">
              Самые любимые блюда наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Борщ домашний",
                description: "Классический борщ по бабушкиному рецепту со сметаной",
                price: "350 ₽",
                cookName: "Анна Петровна",
                rating: 4.9
              },
              {
                title: "Котлеты с пюре",
                description: "Нежные котлеты из говядины с воздушным картофельным пюре",
                price: "420 ₽",
                cookName: "Мария Ивановна",
                rating: 4.8
              },
              {
                title: "Плов узбекский",
                description: "Ароматный плов с бараниной, приготовленный в казане",
                price: "480 ₽",
                cookName: "Фарид Рахимов",
                rating: 5.0
              }
            ].map((dish, index) => (
              <Card key={index} className="overflow-hidden border-orange-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                  <img 
                    src="/img/0df4df05-68f0-4d5e-939a-476bfecafc67.jpg" 
                    alt={dish.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{dish.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium">{dish.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{dish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                    <span className="text-sm text-gray-500">👩‍🍳 {dish.cookName}</span>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Доставка
            </h2>
            <p className="text-xl text-gray-600">
              Быстро и бережно доставляем прямо к вашей двери
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Зоны доставки</h3>
                  <p className="text-gray-600">
                    Доставляем в пределах города. Стоимость доставки от 150 ₽, бесплатно при заказе от 1000 ₽
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Время доставки</h3>
                  <p className="text-gray-600">
                    30-60 минут в зависимости от расстояния и загруженности поваров
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия качества</h3>
                  <p className="text-gray-600">
                    Возвращаем деньги, если блюдо не понравилось или доставлено с опозданием
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl p-8">
              <img 
                src="/img/9c66f61b-7da6-405b-abaa-3525dd5c545c.jpg" 
                alt="Доставка еды" 
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Смирнова",
                text: "Заказываю здесь уже полгода. Блюда всегда свежие и вкусные, как будто мама приготовила!",
                rating: 5
              },
              {
                name: "Алексей Петров",
                text: "Отличный сервис! Быстрая доставка, приятные цены. Особенно нравится борщ от Анны Петровны.",
                rating: 5
              },
              {
                name: "Мария Кузнецова",
                text: "Наконец-то нашла место, где готовят по-настоящему домашнюю еду. Рекомендую всем!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="ChefHat" className="text-orange-600" size={32} />
                <h3 className="text-xl font-bold">Домашний Вкус</h3>
              </div>
              <p className="text-gray-400">
                Домашние блюда от местных поваров с доставкой на дом
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@homefood.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Время работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 23:00</p>
                <p>Сб-Вс: 10:00 - 22:00</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Домашний Вкус. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;