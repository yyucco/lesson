export default {

//----------------------------------------
// 定数
//----------------------------------------
  genderitems : [ '女性', '男性' ],
  itemsYesNo: [ 'はい', 'いいえ' ],



//----------------------------------------
// seirekiYear
// warekiYear
//----------------------------------------
  seirekiYear : (index)=> {
    const date = new Date(); 
    return ( date.getFullYear() - 20 ) - index;
  },
  warekiYear : (index)=> {
    const syowa = 1926;
    const heisei = 1989;
    const reiwa = 2019;
    const date = new Date();

    let year = ( date.getFullYear() - 20 ) - index;
    let gen= '';

    if( syowa <= year && year < heisei ){
        gen = "昭和";
        year = ( year - syowa ) + 1;
      }else if( heisei <=year && year < reiwa ){
        gen = "平成";
        year = ( year - heisei ) + 1;
      }else if ( reiwa <= year ){
        gen = "令和";
        year = ( year - reiwa ) + 1;
      }
    return gen + year;
  }



}