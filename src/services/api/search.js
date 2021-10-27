const key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

export default async function getItemsSearched(name) {
    const url = `https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products?page=1&priceMax=20&priceMin=5&sort=EVALUATE_RATE_ASC&searchName=${name}`
  
  return await fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
		"x-rapidapi-key": key
	}
}).then(res => res.json())

}
