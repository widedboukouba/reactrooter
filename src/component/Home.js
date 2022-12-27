import React from 'react'

const Home = () => {
  return (
    <div>
<div className="top">
	<div className="coluumns">
		<div className="coluumn is-full featured_wraapper p-0">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg" className="featured"/>
			<div className="title_wraapper">
				<span className="ttt">Trending Today</span>
				<p  className="ttt">The Untold Story of the great Lorem Ipsum</p>
				<button className='butt'>Watch It Now</button>
			</div>
		</div>
	</div>
</div>
<div className="contaiiner" style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
	<div className="coluumns is-multiline p-0 pt-6 last">
		<div className="coluumn is-full">
			<p  className="has-text-white">Action Movies Collection</p>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image2.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img3.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img4.PNG"/>
		</div>
	</div>
	<div className="coluumns last">
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img5.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img6.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img7.PNG"/>
		</div>
		<div className="coluumn is-one-quarter">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img8.PNG"/>
		</div>
	</div>
</div>

    </div>
  )
}

export default Home