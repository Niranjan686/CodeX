import { convertMarkdownToHtml } from "../ts/utils/utils";

const Solution = ({ data }: { data: string }) => {
    return (
        <div>
            <div
                id="description-body"
                className="mc-[36px] ml-[26px] text-[14px]"
                dangerouslySetInnerHTML={{
                    __html: convertMarkdownToHtml(data),
                }}
            ></div>
        </div>
    );
};

export default Solution;
