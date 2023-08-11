import logo from './logo.svg';
import './App.css';

function Header(){
    return <header>
        <nav>
            <div class="menu">
                <ul>
                    <div class = "logo"></div>
                    <li><a href="#">호스트가 되어보세요</a></li>
                    <li><a href="#">도움말</a></li>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">로그인</a></li>
                </ul>
            </div>
        </nav>
        <section>
            <div class="search__box">

                <div class="search__title">
                    특색 있는 숙소와 즐길<br />거리를 예약하세요.
                </div>
                <table>
                    <tr>
                        <td colspan="2" class="search__sub__title">
                            목적지
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input class="search__input" type="text" placeholder="  모든위치">
                        </input></td>
                    </tr>
                    <tr>
                        <td class="search__sub__title">체크인</td>
                        <td class="search__sub__title">체크아웃</td>
                    </tr>
                    <tr>
                        <td><input class="search__input" type = "date" /></td>
                        <td><input class="search__input" type = "date" /></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="search__sub__title">인원</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <select class="search__input">
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div class="search__button">
                    <button>검색</button>
                </div>
            </div>
        </section>
    </header>
}

function Main(){
    return <main>
        <section>
        <div class="sec__title">에어비앤비 둘러보기</div>

        <div class="card__box">
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">숙소 및 부티크 호텔</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">트립</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">어드벤처</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">레스토랑</div>
            </div>
        </div>
        </section>

        <section>
        <div class="ad1">

        </div>
        </section>

        <section>
        <div class="sec__title">추천 여행지</div>
        <div class="choo__box">
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
        </div>
        </section>

        <section>
        <div class="sec__title">에어비앤비 플러스를 만나보세요!</div>
        <div class="sec__content">퀄리티와 인테리어 디자인이 검증된 숙소 컬렉션</div>
        <div class="ad2"> </div>
        </section>

        <section>
        <div class="sec__title">전 세계 숙소</div>
        <div class="home__box">

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">오두막 · BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">★★★★★</span>
                        <span class="count">185</span>
                        <span class="type">슈퍼호스트</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </main>
}

function App() {
  return (
    <div>
        <Header></Header>
        <Main></Main> 
    </div>
    
  );
}

export default App;