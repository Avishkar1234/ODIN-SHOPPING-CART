
export default function Home() {
    const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1326&auto=format&fit=crop",
      name: "Headphones",
      price: 45,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1180&auto=format&fit=crop",
      name: "PS5 Controller",
      price: 20,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1585386959984-a4155228f5e1?q=80&w=1200&auto=format&fit=crop",
      name: "Keyboard",
      price: 60,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
      name: "Laptop",
      price: 900,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
      name: "Camera",
      price: 300,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      name: "Shoes",
      price: 80,
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop",
      name: "Smartwatch",
      price: 150,
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1200&auto=format&fit=crop",
      name: "Mouse",
      price: 25,
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1555617117-08fda9c31a5f?q=80&w=1200&auto=format&fit=crop",
      name: "Speaker",
      price: 70,
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1512499617640-c2f999fe5d62?q=80&w=1200&auto=format&fit=crop",
      name: "Backpack",
      price: 55,
    },
  ];

    return (
        <>
            <h1>For you</h1>
            
            {products.map((item) => (
                <div key={item.id} className={item.name}>
                    <img src={item.img} alt={item.name} />
                    <p>This is item no.{item.id}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </>
    )
}