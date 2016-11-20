<script>

    $().ready(function () {
        function topla(x, y) {
            return x + y;
        };
        topla(5, 8);
        $.SayilariTopla(3, 5);
        $.islemler = {
            topla: function (x, y) {
                return x + y;
            },
            cikar: function (x, y) {
                return x - y;
            },
            carp: function (x, y) {
                return x * y;

            },
            bol: function () {
                return x / y;
            }
                
        }


           
           
    });
</script>
