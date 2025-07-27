import '../style/DashBoard.css';
import InfoCard from '../components/dashboard/Cards/InfoCard';
import AlertCard from '../components/dashboard/Cards/AlertCard';

export const route = '/dashboard';
export const label = 'DashBoard';


export default function App() {
    return (
        <div id="dashboard">
            <header className="header">
                <h1 className="title">📊 ダッシュボード</h1>
                <input type="search" placeholder="キーワード検索" />
            </header>

            <main className="main">
                <section className="card-list">
                    <InfoCard
                        title="お知らせ"
                        content="サーバーメンテナンスのお知らせ。"
                    />
                    <InfoCard
                        title="システム情報"
                        content="新機能が追加されました。ダッシュボードをご確認ください。"
                    />
                    <AlertCard
                        title="警告"
                        content="重要: セキュリティ更新が必要です。"
                        severity="high"
                    />
                </section>

                <ul className="summary-list">
                    <li>📦 注文数</li>
                    <li>👤 ユーザー数</li>
                    <li>💬 メッセージ</li>
                </ul>
            </main>

            <footer className="footer">© 2025 Dash Example</footer>
        </div>
    );
}
