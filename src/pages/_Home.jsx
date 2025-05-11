export const route = '/';
export const label = 'Home';

export default function Home() {
    return (
        <div style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>This is Home Page.</h1>
        </div>
    );
}
