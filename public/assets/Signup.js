const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Kirim data ke backend
      });
  
      const result = await response.json();
      setLoading(false);
  
      if (response.ok) {
        alert(result.message);
        navigate("/login"); // Pindah ke halaman login
      } else {
        setError(result.message || "Terjadi kesalahan");
      }
    } catch (error) {
      setLoading(false);
      setError("Gagal terhubung ke server");
    }
  };
  