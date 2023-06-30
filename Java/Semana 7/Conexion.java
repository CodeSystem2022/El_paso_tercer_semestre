      try{
         Class.forName("com.mysql.cj.jdbc.Driver");
         conexion=DriverManager.getConnection(url,usuario,password);
      }catch (ClassNotFoundException | SQLException e){
         System.out.println("Ocurrio un error en la conexión: "+e.getMessage());
      }//Fin catch
      return conexion;
}//Fin metodo Connection