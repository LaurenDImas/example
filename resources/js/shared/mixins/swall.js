export default{
    methods: { 
        alert(text, tipe) {
            if (tipe === 1) {
                return this.$swal({
                    title: "Succes",
                    text: text,
                    timer: 3000,
                    icon: "success",
                    
                });
            } else if (tipe === 2) {
                return this.$swal({
                    title: "Something Wrong",
                    text: text,
                    timer: 3000,
                    icon: "error"
                });
            } else if (tipe === 3) {
                return this.$swal({
                    title: "Are you sure ?",
                    text: text,
                    icon: "warning",
                    buttons: ["Cancel", "Delete"],
                    dangerMode: true
                }).then(willDelete => {
                    if (willDelete) {
                        this.alert("Data has been deleted !", 1);
                    }
                });
            } else if (tipe === 4) {
                return this.$swal({
                    title: "Are you sure ?",
                    text: text,
                    icon: "warning",
                    buttons: ["Cancel", "Update"],
                    dangerMode: false
                }).then(willDelete => {
                    if (willDelete) {
                        this.alert("Data has been deleted !", 1);
                    }
                });
            }
        }
    }
};