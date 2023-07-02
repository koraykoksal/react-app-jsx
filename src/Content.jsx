
//src klasörü içindeki resim import edilerek çağırılır.
import bird from "./img/lion.jpg"

export const Content = () => {
  return (

    <main>
        <h2>React JSX</h2>

        <p>React JSX and Library</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi quisquam impedit earum, unde fuga laboriosam rerum. Reiciendis, nam. Error aliquid architecto ullam illum ex aspernatur distinctio excepturi! Magni, cumque?</p>

        {/* harici bir resim linki varsa doğrudan çağırılıp çalıştırılır */}
        <img src="https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg" alt="bird1" />

        {/* src klasörü içindeki bir resim import edilerek çağırılır. */}
        <img src={bird} alt="bird" />


        {/* public klasörü içindeki bir resim dictionary yolu belirtilerek çağırılabilir */}
        <img src="./images/elephant.jpg" alt="elephant" />

    </main>
  )
}
