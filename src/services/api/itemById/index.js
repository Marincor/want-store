
const key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

export default async function getItemByID(id) {

  
  return await fetch(`https://magic-aliexpress1.p.rapidapi.com/api/product/${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
		"x-rapidapi-key": key
	}
}).then(res => res.json())

}