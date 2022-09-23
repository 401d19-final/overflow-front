import parseTime from '../public/static/ParseTime'

export default function Comment({ content, username, updated }) {

    const passedTime = parseTime(updated);

    return (
        <div>
            <div class="w-3/4 mt-4 mx-auto shadow p-3 bg-white flex">
                <div class="p-3">
                    <img src="https://www.pngrepo.com/download/2880/chat-bubbles-with-ellipsis.png" class="w-8 opacity-70" alt=" " />
                </div>
                <div class="flex items-stretch flex-1 pl-2">
                    <div class="self-center leading-tight">
                        <span class="text-gray-700 text-sm">
                            {content}
                        </span>
                    </div>
                </div>
                <div class="flex items-stretch">

                    <div class="leading-none text-sm self-center pl-2 pr-4">
                        <span class="text-xs text-gray-600">
                            by {username} &bull; {passedTime}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
