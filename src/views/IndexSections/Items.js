import React from "react";

// reactstrap components
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Items extends React.Component {

    constructor(props) {
    super(props);
 
    this.state = {
      data: null,
      isLoaded: false,
    };
  }
 
  componentDidMount() {

    fetch('https://us-central1-artbid-d3199.cloudfunctions.net/webApi/api/getItems')
      .then(response => response.json())
      .then(data => this.setState({ data:data ,isLoaded:true}));
  }
 
  render() {
   const { isLoaded, data } = this.state;
   const items = []

    return (
            
            <div id="columns">
            {items}

            {
              
              isLoaded?
              Object.keys(data).forEach(function(key) {
                console.log(data)
                
                items.push(<figure><img src={data[key].featuredimage}/><figcaption>{data[key].caption}</figcaption></figure>)
      
              })
              :console.log('loading ')
              
           
              
              
              // <figure>
              
              // <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg"/>
              // <figcaption>Belle, based on 1770’s French court fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://cdn11.bigcommerce.com/s-t6ezhe/images/stencil/500x659/products/221/3031/MSL-28-Detail01-update__10092.1582580972.jpg?c=2"/>
              // <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
              // </figure>
              
              //  <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://moneydotcomvip.files.wordpress.com/2018/02/180209-olympic-medal-worth.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://i.etsystatic.com/15285954/r/il/d302ac/1645649674/il_570xN.1645649674_trta.jpg"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://image.cnbcfm.com/api/v1/image/101415692-olympicmedals2.jpg?v=1392320578&w=1600&h=900"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://i0.wp.com/www.swimmingworldmagazine.com/news/wp-content/uploads/2015/07/2016-olympic-torch.jpg?fit=1300%2C1029&ssl=1"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://themabscollection.net/images/1800s1/IMG_4507.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2019-08/The-various-phases-of-the-evolution-of-Arabic-calligraphy-can-be-seen-at-the-Sharjah-Calligraphy-Museum-Courtesy-Sharjah-Museums-Authority.jpg?itok=DsEMGpkY"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-02/22BestCovers-Dorfman-02-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://www.nissan-global.com/EN/TOP2020/IMAGES/hero_01.jpg"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <img src="https://static.dezeen.com/uploads/2017/10/Olympic-Winter-Games-2018-Medals-by-Pyeong-Chang_dezeen_sq1.jpg"/>
              // <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
              // </figure>
              
              // <figure>
              
              // <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg"/>
              // <figcaption>Belle, based on 1770’s French court fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://cdn11.bigcommerce.com/s-t6ezhe/images/stencil/500x659/products/221/3031/MSL-28-Detail01-update__10092.1582580972.jpg?c=2"/>
              // <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
              // </figure>
              
              //  <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://moneydotcomvip.files.wordpress.com/2018/02/180209-olympic-medal-worth.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://i.etsystatic.com/15285954/r/il/d302ac/1645649674/il_570xN.1645649674_trta.jpg"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://image.cnbcfm.com/api/v1/image/101415692-olympicmedals2.jpg?v=1392320578&w=1600&h=900"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://i0.wp.com/www.swimmingworldmagazine.com/news/wp-content/uploads/2015/07/2016-olympic-torch.jpg?fit=1300%2C1029&ssl=1"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://themabscollection.net/images/1800s1/IMG_4507.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2019-08/The-various-phases-of-the-evolution-of-Arabic-calligraphy-can-be-seen-at-the-Sharjah-Calligraphy-Museum-Courtesy-Sharjah-Museums-Authority.jpg?itok=DsEMGpkY"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-02/22BestCovers-Dorfman-02-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://www.nissan-global.com/EN/TOP2020/IMAGES/hero_01.jpg"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <img src="https://static.dezeen.com/uploads/2017/10/Olympic-Winter-Games-2018-Medals-by-Pyeong-Chang_dezeen_sq1.jpg"/>
              // <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
              // </figure>
              
              // <figure>
              
              // <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg"/>
              // <figcaption>Belle, based on 1770’s French court fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://cdn11.bigcommerce.com/s-t6ezhe/images/stencil/500x659/products/221/3031/MSL-28-Detail01-update__10092.1582580972.jpg?c=2"/>
              // <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
              // </figure>
              
              //  <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://moneydotcomvip.files.wordpress.com/2018/02/180209-olympic-medal-worth.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://i.etsystatic.com/15285954/r/il/d302ac/1645649674/il_570xN.1645649674_trta.jpg"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://image.cnbcfm.com/api/v1/image/101415692-olympicmedals2.jpg?v=1392320578&w=1600&h=900"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://i0.wp.com/www.swimmingworldmagazine.com/news/wp-content/uploads/2015/07/2016-olympic-torch.jpg?fit=1300%2C1029&ssl=1"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://themabscollection.net/images/1800s1/IMG_4507.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2019-08/The-various-phases-of-the-evolution-of-Arabic-calligraphy-can-be-seen-at-the-Sharjah-Calligraphy-Museum-Courtesy-Sharjah-Museums-Authority.jpg?itok=DsEMGpkY"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-02/22BestCovers-Dorfman-02-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://www.nissan-global.com/EN/TOP2020/IMAGES/hero_01.jpg"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <img src="https://static.dezeen.com/uploads/2017/10/Olympic-Winter-Games-2018-Medals-by-Pyeong-Chang_dezeen_sq1.jpg"/>
              // <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
              // </figure>
              
              // <figure>
              
              // <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg"/>
              // <figcaption>Belle, based on 1770’s French court fashion</figcaption>
              // </figure>
              
              // <figure>
              // <img src="https://cdn11.bigcommerce.com/s-t6ezhe/images/stencil/500x659/products/221/3031/MSL-28-Detail01-update__10092.1582580972.jpg?c=2"/>
              // <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
              // </figure>
              
              //  <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://moneydotcomvip.files.wordpress.com/2018/02/180209-olympic-medal-worth.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://i.etsystatic.com/15285954/r/il/d302ac/1645649674/il_570xN.1645649674_trta.jpg"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://image.cnbcfm.com/api/v1/image/101415692-olympicmedals2.jpg?v=1392320578&w=1600&h=900"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://i0.wp.com/www.swimmingworldmagazine.com/news/wp-content/uploads/2015/07/2016-olympic-torch.jpg?fit=1300%2C1029&ssl=1"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // <figure>
              // <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
              // </figure>
              
              //  <figure>
              //  <img src="https://themabscollection.net/images/1800s1/IMG_4507.jpg" />
              // </figure>
              
              // <figure>
              // <img src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2019-08/The-various-phases-of-the-evolution-of-Arabic-calligraphy-can-be-seen-at-the-Sharjah-Calligraphy-Museum-Courtesy-Sharjah-Museums-Authority.jpg?itok=DsEMGpkY"/>
              // <figcaption>Snow White, based on 16th century German fashion</figcaption>
              // </figure> 
              
              //  <figure>
              // <img src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-02/22BestCovers-Dorfman-02-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
              // <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
              // </figure>
              
              //   <figure>
              // <img src="https://www.nissan-global.com/EN/TOP2020/IMAGES/hero_01.jpg"/>
              //   <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
              // </figure> 
              // 
            }
            </div>
          )
        }
      }
export default Items;
