import logo from './logo.svg';
import Landing from "pages/LandingPage";
import Login from "pages/LoginPage";
import Register from "pages/RegisterPage";
import LoginMitra from "pages/LoginMitra";
import ListProduk from "pages/ListProdukPage";
import ProdukHaji from "pages/ProdukHajiPage";
import LandingPageBorrower from "pages/LandingPageBorrower";
import LandingPageMobil from "pages/LandingPageMobil";
import Informasi from "pages/InformasiPage";
import TentangKami from "pages/TentangKamiPage";
import SyaratKetentuan from "pages/SyaratKetentuanPage";
import SimulasiDanaMobil from "pages/SimulasiDanaMobil";
import PendaftaranMobil from "pages/PendaftaranDanaMobil";
import PendaftaranRumah from "pages/PendaftaranDanaRumah";
import PendaftaranHaji from "pages/PendaftaranDanaHaji";
import PengajuanDanaMobil from "pages/PengajuanDanaMobil";
import JadwalMobil from "pages/JadwalAngsuranMobil";
import DokumenNasabah from "pages/DokumenNasabahPage";
import ProsedurPelunasan from "pages/ProsedurPelunasanPage";
import SimulasiPelunasan from "pages/SimulasiPelunasanPage";
import BayarTagihan from "pages/BayarTagihanPage";
import Pengajuan from "pages/PenganjuanPage";
import HomeBorrower from "pages/HomeBorrower";
import LandingPageRumah from "pages/LandingPageRumah";
import DetailBerita from "pages/DetailBeritaPage";
import PromoPage from "pages/PromoPage";
import HasilSimulasi from "pages/HasilSimulasiPage";
import SimulasiDanaMobilForm from "pages/SimulasiDanaMobilFormPage";
import SimulasiDanaRumahForm from "pages/SimulasiDanaRumahFormPage";
import DaftarDanaRumah from "pages/PendaftaranDanaRumah";
import HasilSimulasiDanaRumah from "pages/HasilSimulasiDanaRumah";
import SiapDanaMobilForm from "pages/DanaMobilForm";
import HasilSimulasiSiapDanaMobil from "pages/HasilSimulasiSiapDanaMobil";
import DaftarDanaMobil from "pages/DaftarSiapDanaMobil";
import SiapDanaHaji from 'pages/SiapDanaHaji'
import SiapDanaHajiForm from 'pages/SiapDanaHajiForm'
import SiapDanaHajiFormTwo from 'pages/SiapDanaHajiFormTwo'
import SiapDanaHajiDataDiri from 'pages/SiapDanaHajiDataDiri'
import SiapDanaHajiFormTree from 'pages/SiapDanaHajiFormTree'
import SiapDanaHajiDaftarPeserta from 'pages/SiapDanaHajiDaftarPeserta'


import "assets/scss/style.scss";

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/loginmitra" component={LoginMitra} />
          <Route
            exact
            path="/landingpageborrower"
            component={LandingPageBorrower}
          />
          <Route exact path="/landingpagemobil" component={LandingPageMobil} />
          <Route exact path="/landingpagerumah" component={LandingPageRumah} />
          <Route exact path="/listproduk" component={ListProduk} />
          <Route exact path="/produkhaji" component={ProdukHaji} />
          <Route exact path="/informasi" component={Informasi} />
          <Route exact path="/tentangkami" component={TentangKami} />
          <Route exact path="/syaratketentuan" component={SyaratKetentuan} />
          <Route
            exact
            path="/simulasidanamobil"
            component={SimulasiDanaMobil}
          />
          <Route
            exact
            path="/pendaftarandanamobil"
            component={PendaftaranMobil}
          />
          <Route
            exact
            path="/pendaftarandanarumah"
            component={PendaftaranRumah}
          />
          <Route
            exact
            path="/pendaftarandanahaji"
            component={PendaftaranHaji}
          />
          <Route
            exact
            path="/pengajuandanamobil"
            component={PengajuanDanaMobil}
          />
          <Route exact path="/jadwalmobil" component={JadwalMobil} />
          <Route exact path="/dokumen" component={DokumenNasabah} />
          <Route
            exact
            path="/prosedurpelunasan"
            component={ProsedurPelunasan}
          />
          <Route
            exact
            path="/simulasipelunasan"
            component={SimulasiPelunasan}
          />
          <Route exact path="/bayartagihan" component={BayarTagihan} />
          <Route exact path="/pengajuan" component={Pengajuan} />
          <Route exact path="/homeborrower" component={HomeBorrower} />
          <Route exact path="/detailberita" component={DetailBerita} />
          <Route exact path="/promo" component={PromoPage} />
          <Route exact path="/hasilsimulasi" component={HasilSimulasi} />
          <Route
            exact
            path="/simulasidanamobilform"
            component={SimulasiDanaMobilForm}
          />
          <Route
            exact
            path="/simulasidanarumahform"
            component={SimulasiDanaRumahForm}
          />
          <Route exact path="/daftardanarumah" component={DaftarDanaRumah} />
          <Route
            exact
            path="/hasilsimulasirumah"
            component={HasilSimulasiDanaRumah}
          />
          <Route
            exact
            path="/siapdanamobilform"
            component={SiapDanaMobilForm}
          />
          <Route
            exact
            path="/hasilsimulasisiapdanamobil"
            component={HasilSimulasiSiapDanaMobil}
          />
          <Route
            exact
            path="/daftardanamobil"
            component={DaftarDanaMobil}
          />

          <Route 
          exact 
          path="/siapdanahaji" 
          component={SiapDanaHaji}/>

          <Route 
          exact 
          path="/siapdanahajiform" 
          component={SiapDanaHajiForm}/>

          <Route 
          exact 
          path="/siapdanahajiformtwo" 
          component={SiapDanaHajiFormTwo}/>

          <Route 
          exact 
          path="/siapdanahajidatadiri" 
          component={SiapDanaHajiDataDiri}/>

          <Route 
          exact 
          path="/siapdanahajiformtree" 
          component={SiapDanaHajiFormTree}/>

          <Route 
          exact 
          path="/siapdanahajidaftarpeserta" 
          component={SiapDanaHajiDaftarPeserta}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
