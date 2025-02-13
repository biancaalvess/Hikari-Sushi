import React, { useState } from 'react';
import { 
  Home, 
  Menu as MenuIcon, 
  ShoppingBag, 
  User, 
  Clock, 
  MapPin,
  ChevronRight,
  Star,
  Search,
  Plus,
  Minus,
  X,
  Send
} from 'lucide-react';

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

const menuItems = [
  {
    id: "1",
    name: "Hot Roll",
    description: "Roll empanado com salmão e cream cheese",
    price: 32.9,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "2",
    name: "Salmão Grelhado",
    description: "Salmão grelhado com molho teriyaki",
    price: 45.9,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "3",
    name: "Uramaki de Atum",
    description: "Roll invertido com atum e cebolinha",
    price: 28.9,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "4",
    name: "Temaki Especial",
    description: "Temaki de salmão com cream cheese",
    price: 25.9,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "5",
    name: "Sashimi de Salmão",
    description: "10 fatias de salmão fresco",
    price: 39.9,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584583570840-0a3d88497593?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "6",
    name: "Dragon Roll",
    description: "Roll especial com camarão empanado",
    price: 42.9,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "7",
    name: "Niguiri Misto",
    description: "8 unidades variadas",
    price: 36.9,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "8",
    name: "Combo Família",
    description: "40 peças sortidas",
    price: 89.9,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop&auto=format",
    category: "combos",
  },
  {
    id: "9",
    name: "Temaki Skin",
    description: "Temaki de salmão skin com cream cheese",
    price: 26.9,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "10",
    name: "Philadélfia Roll",
    description: "Roll com salmão e cream cheese",
    price: 34.9,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558985250-27a406d64cb3?w=500&h=500&fit=crop&auto=format",
    category: "sushi",
  },
  {
    id: "11",
    name: "Lámen Tradicional",
    description: "Caldo de galinha, macarrão, legumes e carne",
    price: 29.9,
    rating: 4.5,
    image: "https://i.pinimg.com/736x/94/84/90/948490df66536e707e463d9c2ec0e983.jpg",
    category: "lamen",
  },
  {
    id: "12",
    name: "Lámen Vegetariano",
    description: "Caldo de legumes, macarrão, legumes e tofu",
    price: 24.9,
    rating: 4.2,
    image: "https://i.pinimg.com/736x/c1/2e/48/c12e4889a0aea8b79d9f8c6a4a3d645b.jpg",
    category: "lamen",
  },
  {
    id: "13",
    name: "Refrigerante",
    description: "Coca-Cola, Fanta ou Guaraná",
    price: 8.9,
    rating: 4.0,
    image: "https://i.pinimg.com/736x/92/97/1e/92971e80282b0f7c6be1856afeaccaec.jpg",
    category: "bebidas",
  },
  {
    id: "14",
    name: "Suco Natural",
    description: "Laranja, abacaxi ou manga",
    price: 12.9,
    rating: 4.7,
    image: "https://i.pinimg.com/736x/5d/35/13/5d3513ad739761d65b24e50fdfe968ed.jpg",
    category: "bebidas",
  },
]

const pastOrders = [
  {
    id: "001",
    date: "2024-03-15",
    items: [
      { name: "Hot Roll", quantity: 2, price: 32.9 },
      { name: "Temaki Especial", quantity: 1, price: 25.9 },
    ],
    total: 91.7,
    status: "Entregue",
  },
  {
    id: "002",
    date: "2024-03-10",
    items: [
      { name: "Combo Família", quantity: 1, price: 89.9 },
      { name: "Sashimi de Salmão", quantity: 1, price: 39.9 },
    ],
    total: 129.8,
    status: "Entregue",
  },
]

function App() {
  const [activeTab, setActiveTab] = useState("home")
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderSent, setOrderSent] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("todos")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      setCart(
        cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
        }
        return item
      }),
    )
  }

  const sendOrder = () => {
    setOrderSent(true)
    setTimeout(() => {
      setCart([])
      setOrderSent(false)
      setActiveTab("orders")
    }, 2000)
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const filteredItems =
    selectedCategory === "todos" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Status Bar */}
      <div className="bg-red-800 text-white text-sm py-1 px-4 text-center">Aberto • Fecha às 23:00</div>

      {/* Main Content */}
      <main className="pb-20">
        {activeTab === "home" && (
          <>
            {/* Header */}
            <header className="bg-white px-4 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-red-900">Bem-vindo ao Hikari Sushi!</h1>
                  <p className="text-neutral-600 flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Heliópolis, BA
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <User size={20} className="text-red-800" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar sushi, temaki, etc."
                  className="w-full py-3 px-4 pl-10 bg-red-50 rounded-xl text-red-900 placeholder-red-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-300" size={20} />
              </div>
            </header>

            {/* Categories Scroll */}
            <div className="px-4 py-6 bg-gradient-to-b from-white to-neutral-50">
              <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
                <CategoryButton
                  icon="🍱"
                  label="Todos"
                  active={selectedCategory === "todos"}
                  onClick={() => setSelectedCategory("todos")}
                />
                <CategoryButton
                  icon="🍣"
                  label="Sushi"
                  active={selectedCategory === "sushi"}
                  onClick={() => setSelectedCategory("sushi")}
                />
                <CategoryButton
                  icon="🍜"
                  label="Lámen"
                  active={selectedCategory === "lamen"}
                  onClick={() => setSelectedCategory("lamen")}
                />
                <CategoryButton
                  icon="🥢"
                  label="Combos"
                  active={selectedCategory === "combos"}
                  onClick={() => setSelectedCategory("combos")}
                />
                <CategoryButton
                  icon="🍶"
                  label="Bebidas"
                  active={selectedCategory === "bebidas"}
                  onClick={() => setSelectedCategory("bebidas")}
                />
              </div>
            </div>

            {/* Menu Items Grid */}
            <section className="px-4 mb-8">
              <div className="grid grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} {...item} onAdd={() => addToCart(item)} />
                ))}
              </div>
            </section>

            {/* Special Offers */}
            <section className="px-4 mb-8">
              <h2 className="text-xl font-bold text-red-900 mb-4">Promoções</h2>
              <div className="space-y-4">
                <OfferCard
                  title="30% OFF em Combos"
                  description="Válido apenas hoje!"
                  image="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&h=300&fit=crop&auto=format"
                  color="from-red-800 to-amber-600"
                />
                <OfferCard
                  title="Missoshiro Grátis"
                  description="Em pedidos acima de R$100"
                  image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=300&fit=crop&auto=format"
                  color="from-amber-500 to-red-700"
                />
              </div>
            </section>
          </>
        )}

        {activeTab === "menu" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Cardápio</h2>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <MenuItem key={item.id} {...item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Meu Pedido</h2>
            {cart.length > 0 ? (
              <div className="bg-white rounded-xl p-4 shadow-sm">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-neutral-100">
                    <div className="flex items-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="ml-3">
                        <h3 className="font-semibold text-red-900">{item.name}</h3>
                        <p className="text-red-800 font-bold">R$ {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full bg-red-50 text-red-800"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full bg-red-50 text-red-800"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 rounded-full bg-red-50 text-red-800 ml-2"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Total do Pedido:</span>
                    <span className="text-xl font-bold text-red-900">R$ {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-neutral-500">
                    <p>Tempo estimado de preparo: 30 minutos</p>
                  </div>
                  <button
                    onClick={sendOrder}
                    className="w-full btn-primary flex items-center justify-center"
                    disabled={orderSent}
                  >
                    {orderSent ? (
                      "Pedido Enviado! ✅"
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Enviar Pedido
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <ShoppingBag size={48} className="mx-auto text-neutral-300 mb-4" />
                <p className="text-neutral-500">Seu carrinho está vazio</p>
                <button onClick={() => setActiveTab("menu")} className="mt-4 btn-secondary">
                  Ver Cardápio
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Histórico de Pedidos</h2>
            <div className="space-y-4">
              {pastOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-neutral-500">{new Date(order.date).toLocaleDateString("pt-BR")}</span>
                    <span className="text-sm font-medium text-green-600">{order.status}</span>
                  </div>
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-neutral-800">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-neutral-600">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="mt-3 pt-3 border-t border-neutral-100 flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-red-900">R$ {order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-2">
        <div className="flex justify-around">
          <NavButton
            icon={<Home size={24} />}
            label="Início"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <NavButton
            icon={<MenuIcon size={24} />}
            label="Cardápio"
            active={activeTab === "menu"}
            onClick={() => setActiveTab("menu")}
          />
          <NavButton
            icon={<ShoppingBag size={24} />}
            label="Pedidos"
            active={activeTab === "orders"}
            onClick={() => setActiveTab("orders")}
            badge={cart.length}
          />
          <NavButton
            icon={<Clock size={24} />}
            label="Histórico"
            active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          />
        </div>
      </nav>
    </div>
  )
}

function CategoryButton({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string
  label: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-6 py-3 rounded-xl whitespace-nowrap ${
        active ? "bg-red-800 text-white" : "bg-white text-neutral-600"
      }`}
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

function MenuItem({
  name,
  price,
  rating,
  image,
  description,
  onAdd,
}: {
  name: string
  price: number
  rating: number
  image: string
  description: string
  onAdd: () => void
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-red-900">{name}</h3>
        <p className="text-sm text-neutral-500 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-800 font-bold">R$ {price.toFixed(2)}</span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm">
              <Star size={16} className="text-amber-400 fill-current" />
              <span className="ml-1">{rating}</span>
            </div>
            <button onClick={onAdd} className="p-2 rounded-full bg-red-50 text-red-800 hover:bg-red-100">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OfferCard({
  title,
  description,
  image,
  color,
}: {
  title: string
  description: string
  image: string
  color: string
}) {
  return (
    <div className={`relative h-32 rounded-xl overflow-hidden bg-gradient-to-r ${color}`}>
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
      />
      <div className="relative h-full p-4 flex items-center justify-between">
        <div className="text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <ChevronRight className="text-white" size={24} />
      </div>
    </div>
  )
}

function NavButton({
  icon,
  label,
  active = false,
  onClick,
  badge,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick: () => void
  badge?: number
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-1 relative ${
        active ? "text-red-800" : "text-neutral-400"
      }`}
    >
      <div className="relative">
        {icon}
        {badge && badge > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}

export default App