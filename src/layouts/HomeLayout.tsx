import Paper from '../components/layouts/Paper';

export default function HomeLayout() {
  return (
    <div className="flex flex-col">
      <Paper pageNumber={1}>
        <div className="text-14px text-red-800 text-red-200">
          Welcome to Home Page <br />
          <button>ABC</button> <br />
          <input type="text" placeholder="text." />
        </div>
      </Paper>
    </div>
  );
}
