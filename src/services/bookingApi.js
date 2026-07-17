const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setSubmitting(true);
    setError("");

    const res = await createBooking(formData);

    console.log("Booking Response:", res);

    if (res.success) {
      setBooking(res.data);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setError("Booking failed.");
    }
  } catch (err) {
    console.log(err);

    setError(
      err.response?.data?.message ||
      "Booking failed."
    );
  } finally {
    setSubmitting(false);
  }
};