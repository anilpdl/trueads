/*
(function () {
  let trueAds = trueAds || {};
  trueAds.zones = trueAds.zones || [];

  let $holders = document.getElementsByClassName(window['_nptads_namespace']);
  for (var i = 0; i < $holders.length; i++) {
    let $el = $holders[i];
    $el.onclick = (e) => {
      console.log(e)
    };
    let zone = {
      $el,
      id: $el.dataset.nptadsId,
      width: $el.innerWidth || $el.clientWidth,
      height: $el.innerHeight || $el.clientHeight
    };
    trueAds.zones.push(zone);
  }
  console.log(trueAds.zones)
})();
*/
(function () {
var $ad_divs = document.getElementsByClassName("TAD");
var adClickFunction = function(event){
    var $ad_id = event.target.attributes['data-nptads-id'].value;
    var $ad_img_src = event.target.getElementsByTagName('img')[0].src;
    var $ad_id_and_imgSrc_array = {adId: $ad_id,adImgSrc: $ad_img_src};
    console.log($ad_id_and_imgSrc_array);
};
for (var i = 0; i < $ad_divs.length; i++) {
    $ad_divs[i].addEventListener('click', adClickFunction);
}
})();



