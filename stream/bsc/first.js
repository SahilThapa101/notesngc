var flag = 0;


			function my()
			{
				document.getElementById("tr").style.display = 'none';

				var1 = document.getElementById('rt').value;


				$('#fr').html('');
    					




				if(var1 == "laser" || var1 == "Laser")
				{
					
						
    					$('#fr').html('<a href="Physics/sem2/unit1/gng.html">Laser</a>');
    					e.preventDefault();
						


						flag = 1;

						

				}


				if(var1 == "Carnot cycle" || var1 == "carnot cycle" || var1 == "CARNOT CYCLE" || var1 == "carnot" || var1 == "CARNOT" || var1 == "Carnot")
				{
					$('#fr').html('<a href="Physics/sem1/Unit3/carnot.html">Carnot Cycle!</a>');
    					e.preventDefault();
						


						flag = 1;
				}

				if(var1 == "Optics" || var1 == "optics" || var1 == "OPTICS")
				{
					$('#fr').html('<a href="Physics/sem2/kop.html">Optics!</a>');
    					e.preventDefault();
						


						flag = 1;
				}



				if(var1 == "previous years questions" || var1 == "previous" || var1 == "Previous" || var1 == "PREVIOUS YEARS" || var1 == "Previous Years Questions" || var1 == "Previous years" || var1 == "Previuos year")
				{
					$('#fr').html('<a href="sem112.html">Previous years Questions(Sem 1)</a>');
    					e.preventDefault();
						


						flag = 1;
				}

				if(var1 == "hologram" || var1 == "HOLOGRAM" || var1 == "Hologram")
				{
					$('#fr').html('<a href="Physics/sem2/unit1/hologram.html">Hologram!</a>');
    					e.preventDefault();
						


						flag = 1;
				}

				if(var1 == "MAths exercise" || var1 == "maths exercise" || var1 == "MAths exercises sem2" || var1 == "MATHS eXERCISE" || var1 == "MAths solved" || var1 == "Maths solved exercises" || var1 == "maths exercises" || var1 == "Maths exercises")
				{
					$('#fr').html('<a href="Maths/sem2/semf.html">Maths exercises! (Sem 2)</a>');
    					e.preventDefault();
						


						flag = 1;
				}

				if(var1 == "Maths" || var1 == "maths" || var1 == "math" || var1 == "Math")
				{
					$('#fr').html('<a href="Maths/sem2/semf.html">Maths (Sem 2)</a>');
    					e.preventDefault();
				}


				if(flag == 0)
				{
					document.getElementById("tr").style.display = 'block';
				}


				flag = 0;

				

			}
