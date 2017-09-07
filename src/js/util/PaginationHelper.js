const PaginationHelper = {
    appendTruncateButtons(buttons, pageCount) {
        buttons.push("-->");
        buttons.push(pageCount - 1);
        buttons.push(pageCount);
    },
    prependTruncateButtons(buttons) {
        buttons.push(1);
        buttons.push(2);
        buttons.push("<--");
    },
    generateButtons(currentPage, pageCount, surroundingPageLinkSize) {
        let buttons = [];

        // if (currentPage > 1) {
        //     buttons.push("<");
        // }

        let truncate = pageCount > (7 + (surroundingPageLinkSize * 2));
        if (!truncate) {
            for (let i = 1; i <= pageCount; i++) {
                buttons.push(i);
            }
        } else {
            let truncateEnd = currentPage < (1 + (surroundingPageLinkSize * 2)),
                truncateBoth = (pageCount - (surroundingPageLinkSize * 2)) > currentPage && currentPage > (surroundingPageLinkSize * 2);

            if (truncateEnd) {
                for (let j = 1; j < (4 + (surroundingPageLinkSize * 2)); j++) {
                    buttons.push(j);
                }
                this.appendTruncateButtons(buttons, pageCount);
            } else if (truncateBoth) {
                this.prependTruncateButtons(buttons);
                for (let k = (currentPage - surroundingPageLinkSize); k <= (currentPage + surroundingPageLinkSize); k++) {
                    buttons.push(k);
                }
                this.appendTruncateButtons(buttons, pageCount);
            } else { // Truncate start
                this.prependTruncateButtons(buttons);
                for (let l = pageCount - (2 + (surroundingPageLinkSize * 2)); l <= pageCount; l++) {
                    buttons.push(l);
                }
            }
        }

        // if (currentPage < pageCount) {
        //     buttons.push(">");
        // }

        return buttons;
    }
}

export default PaginationHelper;