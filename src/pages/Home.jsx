
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
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Speaker",
      price: 70,
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1548611716-f156c633d514?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Backpack",
      price: 55,
    },
  ];

    return (
        <>
            <h1>Welcome to <strong>Zippfy</strong> where you can find all Home appliances and all the latest gadgets that you need.</h1>
            <h3>For you</h3>

            <p></p>
            
            {products.map((item) => (
                <div key={item.id} className={item.name}>
                    <img src={item.img} alt={item.name} />
                    <p>This is item no.{item.id}</p>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </>
    )
}