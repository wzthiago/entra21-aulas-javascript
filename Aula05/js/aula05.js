$("body").attr("class", "container")

$("<main>", { class: "row" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<ul>").append(
                    $("<li>").append(
                        $("<a>", { href: "horizontal.html", text: "Site Horizontal" })
                    ),
                    $("<li>").append(
                        $("<a>", { href: "vertical.html", text: "Site Vertical" })
                    ),
                )
            )
        )

    )
).appendTo("body")