import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./components/Header";
import { useEffect } from "react";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "./app/slices/jobSlice";

function App() {
  const dispatch = useDispatch();

  const getJobs = () => {
    //* 1- Loading Durumunu çalıştır
    dispatch(setLoading());
    api
      //* İstek başarılı olursa slice içerisindeki state i güncellemek için setJobs aksiyonunu çalıştır ve payloadına veriyi gönder
      .get("jobs")
      .then((res) => dispatch(setJobs(res.data)))

      //* İstek başarısız olursa state içerisindeki error değerini güncellemek için setError Aksiyonunu çalıştır ve payloadına veriyi gönder
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="new" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
