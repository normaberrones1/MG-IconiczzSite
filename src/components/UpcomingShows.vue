<template>
    <div class="upcoming-shows">
        <h1>Upcoming Shows</h1>

        <table>
            <thread>
                <tr>
                    <th style="width: 60%;">LOCATION</th>
                    <th style="width: 20%;">DATE</th>
                    <th style="width: 20%;">TIME</th>
                </tr>
            

            <tbody>
                <tr>
                    <td>Location 1</td>
                    <td>Date 1</td>
                    <td>Time 1</td>
                </tr>
                <tr>
                    <td>Location 2</td>
                    <td>Date 2</td>
                    <td>Time 2</td>
                </tr>
                <tr>
                    <td>Location 3</td>
                    <td>Date 3</td>
                    <td>Time 3</td>
                </tr>

            </tbody>

            </thread>
        </table>
    </div>
</template>

<script>

</script>

<style>
    .upcoming-shows {
        margin: 0 auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        color: red;
    }

    th {
        background-color: #f2f2f2;
    }

    th, td {
        border: 1px solid #f2f2f2;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.5);
    }

    tr:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.3);
    }

    tr:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }

    tr {
        transition: background-color 0.3s;
    }



</style>