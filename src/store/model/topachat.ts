import {Store} from './store';

export const TopAchat: Store = {
  currency: '€',
  lowBandwidth: true,
  labels: {
    inStock: {
      container: 'input.cart.button[value="Ajouter au panier"]',
      text: [''],
    },
    maxPrice: {
      container: 'span[itemprop="price"]',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '#cart-box en-rupture',
        text: [''],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      cartUrl: 'https://www.topachat.com/pages/mon_panier.php?refs=in20008221',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_kitevo_puis_ref_est_in20008221.html',
    },
    {
      brand: 'asus',
      model: 'tuf o8g gaming',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006242.html',
    },
    {
      brand: 'asus',
      model: 'tuf 8g gaming',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006306.html',
    },
    {
      brand: 'asus',
      model: 'dual 08g',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006682.html',
    },
    {
      brand: 'asus',
      model: 'dual 8g',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006307.html',
    },
    {
      brand: 'asus',
      model: 'dual 08g mini',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007083.html',
    },
    {
      brand: 'asus',
      model: 'dual 8g mini',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007082.html',
    },
    {
      brand: 'asus',
      model: 'strix 08g gaming',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006243.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra gaming',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006620.html',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006788.html',
    },
    {
      brand: 'gainward',
      model: 'ghost',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006328.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006333.html',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006327.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007209.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006506.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro 8g v2',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006505.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006507.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006508.html',
    },
    {
      brand: 'kfa2',
      model: 'twin x2',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006247.html',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007408.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006537.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x v1',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20008067.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006535.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x ocv1',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006745.html',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006329.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006331.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006332.html',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006330.html',
    },
    {
      brand: 'pny',
      model: 'uprising',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006334.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel epic-x',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006335.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006276.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006277.html',
    },
    {
      brand: 'asus',
      model: 'dual 08g',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005541.html',
    },
    {
      brand: 'asus',
      model: 'tuf o8g gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005629.html',
    },
    {
      brand: 'asus',
      model: 'strix 8g gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005478.html',
    },
    {
      brand: 'asus',
      model: 'strix 08g gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005479.html',
    },
    {
      brand: 'asus',
      model: 'strix 08g white',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007335.html',
    },
    {
      brand: 'asus',
      model: 'dual 8g',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005540.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006005.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006003.html',
    },
    {
      brand: 'evga',
      model: 'xc3 gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006004.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006015.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 gaming',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006014.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005824.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005823.html',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005821.html',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005822.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005631.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005632.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005989.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005990.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20007208.html',
    },
    {
      brand: 'kfa2',
      model: 'ex',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006472.html',
    },
    {
      brand: 'kfa2',
      model: 'dual',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006471.html',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005542.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005696.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20008103.html',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005697.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005698.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20008068.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006213.html',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20006787.html',
    },
    {
      brand: 'palit',
      model: 'jetStream oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005817.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005816.html',
    },
    {
      brand: 'palit',
      model: 'gamingPro',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005820.html',
    },
    {
      brand: 'palit',
      model: 'gameRock oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005815.html',
    },
    {
      brand: 'palit',
      model: 'jetstream',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005818.html',
    },
    {
      brand: 'palit',
      model: 'gamingPro oc',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005819.html',
    },
    {
      brand: 'pny',
      model: 'uprising dual fan',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005221.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming epic-x rgb metal',
      series: '3070',
      url: 'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005220.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.ldlc.com/fiche/PB00383541.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc white edition',
      series: '3070',
      url: 'https://www.ldlc.com/fiche/PB00398664.html',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.ldlc.com/fiche/PB00401469.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005183.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005509.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005184.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005320.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005070.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005289.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005319.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005071.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005199.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005262.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005263.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005223.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005222.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005225.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005224.html',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005291.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005292.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005289.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005290.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005334.html',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005296.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005297.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005293.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005294.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005295.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005267.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005268.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005269.html',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005270.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005228.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005227.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005226.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005229.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005271.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005272.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005273.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005266.html',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3080',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005256.html',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3090',
      url:
        'https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20005257.html',
    },
  ],
  name: 'topachat',
};
